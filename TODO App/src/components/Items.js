import React, { useState } from "react";
import "./Items.css";

function Items({ itemsData }) {
  return (
    <div className="items">
      {itemsData.map((item, index) => (
        <Item key={item.id} checked={item.checked} title={item.title} currentIndex={index} isLastItem={index == itemsData.length - 1} />
      ))}
    </div>
  );
}

function Item({ checked, title, isLastItem }) {
  return (
    <>
      <div className="items__container-item">
        <div className="items__item">
          <input className="items__checkbox" type="checkbox" />
          <p className="items__title">{title}</p>
        </div>
        <div className="items__buttons">
          <button type="button" className="items__button button--update">
            Update
          </button>
          <button type="button" className="items__button button--delete">
            Delete
          </button>
        </div>
        {!isLastItem && <div className="items__divider"></div>}
      </div>
    </>
  );
}

export default Items;
