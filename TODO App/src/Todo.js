import React from "react";
import Items from "./components/Items";

import searchIcon from "./assets/search.svg";

const Todo = () => {
  return (
    <div className="todo">
      <div className="todo__header">
        <h1 className="todo__header-text">THINGS TO DO</h1>
      </div>
      <div className="todo__container-input">
        <input type="text" className="todo__input" />
        <button className="todo__button-addd">add</button>
      </div>
      <Items />
      <div className="todo__shoes">
        <div className="todo__shoes-left">
          <img src={searchIcon} alt="" className="todo__search" />
          <p className="todo__text--shoes">Items left: 3</p>
        </div>
        <div className="todo__shoes-categories">
          <p className="todo__text--shoes">All</p>
          <p className="todo__text--shoes">Active</p>
          <p className="todo__text--shoes">Completed</p>
        </div>
      </div>
    </div>
  );
};

export default Todo;
