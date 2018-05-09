import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.titleInput = React.createRef();
    this.descriptionInput = React.createRef();
  }

  handleClick = input => {
    const title = this.titleInput.current.value;
    const description = this.descriptionInput.current.value;
    if (!title && !description){
      alert("Empty Todo!")
    }
    this.titleInput.current.value = "";
    this.descriptionInput.current.value = "";
    this.props.onChangeInput({ title, description });
  };

  render() {
    return (
      <div className="add-todo">
        <input className="add-todo__input" ref={this.titleInput}
         placeholder="Enter title..." />
        <textarea className="add-todo__input" ref={this.descriptionInput}
          placeholder="Enter description..." />
        <button className="add-todo__btn" onClick={this.handleClick}>
          <i className="fa fa-plus" />
        </button>
      </div>
    );
  }
}
