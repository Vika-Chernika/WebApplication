import React, { Component } from "react";
import { guid } from "../guid";
import { Form } from "../components/form/form";
import { List } from "../components/list/list";
import { data } from "../data";
import localStorage from "../localStorageTodoList";

export class ListContainer extends Component {
  state = {
    list: []
  };

  componentWillMount() {
    this.todosList = new localStorage();
    this.setState({ list: data });
  }
  /*
  componentDidMount() {
    this.todosList.getAllTodos().then( data => {
      this.setState({
        list: data
      });
    });
  }*/

  handleItemClick = id => {
    const { list } = this.state;

    const selectedIndex = list.findIndex(item => {
      return item.id === id;
    });

    list[selectedIndex].completed = !list[selectedIndex].completed;
    this.setState(state => ({
      list: [...list]
    }));
  };
  handleLike = id => {
    const { list } = this.state;

    const selectedIndex = list.findIndex(item => {
      return item.id === id;
    });

    list[selectedIndex].isLiked = !list[selectedIndex].isLiked;
    this.setState(state => ({
      list: [...list]
    }));
  };
  handleAddingComment = ({ id, value }) => {
    const { list } = this.state;

    const selectedIndex = list.findIndex(item => {
      return item.id === id;
    });
    const { comments } = list[selectedIndex];
    list[selectedIndex].comments = [...comments, value];

    this.setState(state => ({
      list: [...list]
    }));
  };
  handleAddingItem = ({ title, description }) => {
    const newItem = { id: guid(), title, description, completed: false };
    this.setState(({ list }) => ({ list: [...list, newItem] }));
  };

  //EDITING ???
  handleEditItem = ({ id, value }) => {
    const { list } = this.state;

    const selectedIndex = list.findIndex(item => {
      return item.id === id;
    });
    const description = list[selectedIndex];
    list[selectedIndex].description = value;
    this.setState(state => ({
      list: [...list]
    }));
  };

  handleRemoveItem = id => {
    const { list } = this.state;

    const selectedIndex = list.findIndex(item => {
      return item.id === id;
    });

    const removedItem = list.splice(selectedIndex, 1);
    this.setState(state => ({
      list: [...list]
    }));
  };

  render() {
    const { list } = this.state;
    return (
      <div>
        <List
          list={list}
          onItemClick={this.handleItemClick}
          onClickLike={this.handleLike}
          onAddingComment={this.handleAddingComment}
          onClickTrash={this.handleRemoveItem}
          onClickEdit={this.handleEditIem}
        />
        <Form onChangeInput={this.handleAddingItem} />
      </div>
    );
  }
}
