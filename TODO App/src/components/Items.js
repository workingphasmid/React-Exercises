import React from "react";
import "./Items.css";

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
          <input className="items__checkbox" type="checkbox" />
          <p className="items__title">Sample</p>
        </div>
        <div className="items__buttons">
          <button type="button" className="items__button button--update">
            Update
          </button>
          <button type="button" className="items__button button--delete">
            Delete
          </button>
        </div>
        <div className="items__divider"></div>
      </div>
    </>
  );
}

export default Items;
