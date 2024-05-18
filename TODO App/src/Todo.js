import React, { useState } from "react";

import Items from "./components/Items";

import "./Todo.css";

import searchIcon from "./assets/search.svg";

import { itemsData as initialItemsData } from "./data/itemsData.js";

// for dev purposes
let nextId = 0;

const Todo = () => {
  const [itemsData, setItemsData] = useState(initialItemsData);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [newTask, setNewTask] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchedItems, setSearchedItems] = useState([]);

  function handleClickAdd() {
    setItemsData([...itemsData, { title: newTask, check: false, id: nextId++ }]);
  }

  function handleChangeTaskInput(e) {
    setNewTask(e.target.value);
  }

  function handleDeleteItemClick(deletedItemID) {
    setItemsData(itemsData.filter((item) => item.id != deletedItemID));
  }

  function handleCheckItemClick(selectedId) {
    const newItemsData = itemsData.map((item) => {
      if (item.id == selectedId) {
        return { ...item, check: !item.check };
      }
      return item;
    });

    setItemsData(newItemsData);
  }

  function handleSearchEnter(e) {
    setSearchedItems(patternMatching(e.target.value, itemsData));
  }

  const itemsLength = itemsData.length;

  return (
    <div className="todo">
      <h1 className="todo__text--header">THINGS TO DO</h1>
      <div className="todo__container-input">
        <input type="text" className="todo__input" placeholder="Add a task..." onChange={handleChangeTaskInput} />
        <button className="todo__button-add" onClick={handleClickAdd}>
          Add
        </button>
      </div>
      <Items itemsData={searchedItems.length == 0 ? itemsData : searchedItems} handleDeleteItemClick={handleDeleteItemClick} handleCheckItemClick={handleCheckItemClick} category={selectedCategory} />
      <div className="todo__shoes">
        <div className="todo__shoes-left">
          <img src={searchIcon} alt="" className="todo__search" onClick={() => setIsSearching(!isSearching)} />
          {isSearching && <input type="text" placeholder="search..." onKeyUp={handleSearchEnter} />}
          <p className="todo__text--shoes">Items left: {itemsLength}</p>
        </div>
        <div className="todo__shoes-categories">
          <p className="todo__text--shoes" onClick={() => setSelectedCategory("All")}>
            All
          </p>
          <p className="todo__text--shoes" onClick={() => setSelectedCategory("Active")}>
            Active
          </p>
          <p className="todo__text--shoes" onClick={() => setSelectedCategory("Completed")}>
            Completed
          </p>
        </div>
      </div>
    </div>
  );
};

function patternMatching(pattern, items) {
  return items.filter((item) => item.title == pattern);
}

export default Todo;
