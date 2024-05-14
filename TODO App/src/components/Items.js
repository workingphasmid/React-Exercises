import React from "react";
import checkboxIcon from "../assets/checkbox.svg";

function Items() {
  return (
    <div className="items">
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
}

function Item() {
  return (
    <>
      <div className="items__container-item">
        <div className="items__item">
          <img src={checkboxIcon} alt="" className="items__checkbox" />
        </div>
        <div className="items__buttons">
          <button className="items__button button--update">update</button>
          <button className="items__button button--delete">delete</button>
        </div>
      </div>
    </>
  );
}

export default Items;
