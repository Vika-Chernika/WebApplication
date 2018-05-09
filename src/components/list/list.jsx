import React from "react";
import { Item } from "./item";

export const List = ({ list, onItemClick, onClickLike, onAddingComment, onClickTrash, onClickEdit }) => (
  <ul className="todo-list">
    {list.map(item => (
      <Item
        key={item.id}
        {...item}
        onClick={onItemClick}
        onClickLike={onClickLike}
        onAddingComment={onAddingComment}
        onClickTrash={onClickTrash}
        onClickEdit={onClickEdit}
      />
    ))}
  </ul>
);
