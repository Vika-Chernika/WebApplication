import React, { Component } from "react";

export class Textarea extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  handleKeyDown = event => {
    if (event.key == "Enter") {
      const { value } = this.input.current;
      if (!value){
        alert('Empty comment')  
      }
      this.input.current.value = "";
      this.props.onChangeInput(value);
    }
  };

  render() {
    return (
      <textarea
        className="add-todo__input"
        ref={this.input}
        onKeyDown={this.handleKeyDown}
        placeholder="Enter text..."

      />
    );
  }
}
