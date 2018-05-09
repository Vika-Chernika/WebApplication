import React, { PureComponent } from "react";
import { Textarea } from "../form/textarea";

export class Item extends PureComponent {
  state = { isCommenting: false };
  state = { isEdit: false };

  handleCommenting = () => {
    this.setState(({ isCommenting }) => ({ isCommenting: !isCommenting }));
  };
  handleEditing = () => {
    this.setState(({ isEdit }) => ({ isEdit: !isEdit }));
  };

  handleAddingComment = value => {
    const { id, onAddingComment } = this.props;

    onAddingComment({ id, value });
  };

  //EDITING ???
  handleEditItem = value => {
    const { onEditing } = this.props;

    onEditing({ value });
  };

  render() {
    const {
      id,
      title,
      description,
      completed,
      comments,
      isLiked,
      onClick,
      onClickLike,
      onAddingComment,
      onClickTrash,
      onEditing
    } = this.props;
    return (
      <li className={`todo ${completed && "todo--completed"}`}>
        <span onClick={() => onClick(id)} className="todo__content">
          {title}
        </span>
        <div>
          {description}
          {this.state.isEdit && (
            <Textarea onChangeInput={this.handleEditItem} />
          )}
        </div>
        <p>
          <span>
            <i
              className={`fa fa-heart ${isLiked ? "fa-heart-active" : ""}`}
              onClick={() => onClickLike(id)}
            />
          </span>
          <span>
            {this.state.isCommenting ? (
              <i className="fa fa-minus" onClick={this.handleCommenting} />
            ) : (
              <i className="fa fa-plus" onClick={this.handleCommenting} />
            )}
          </span>
          <span>
            {this.state.isEdit ? (
              <i className="fa fa-edit" onClick={this.handleEditing} />
            ) : (
              <i className="fa fa-edit" onClick={this.handleEditing} />
            )}
          </span>
          <span>
            <i className={"fa fa-trash"} onClick={() => onClickTrash(id)} />
          </span>
        </p>
        {comments &&
          (<p>Comments</p>,
          <ul>{comments.map(comment => <li>{comment}</li>)}</ul>)}
        {this.state.isCommenting && (
          <Textarea onChangeInput={this.handleAddingComment} />
        )}
      </li>
    );
  }
}
