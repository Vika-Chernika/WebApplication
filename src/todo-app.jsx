import React from "react";
import { ListContainer } from "./containers/list-container";
import { Title } from "./components/title";
import styles from "./style.css";

export const TodoApp = ({ name }) => {
  const appTitle = " My Todos";
  return (
    <div class="todo-app">
      <Title title={appTitle} />
      <ListContainer />
    </div>
  );
};
