import React, { useState } from "react";
import "./Items.css";

function Items({ itemsData, handleDeleteItemClick }) {
  const [updatingId, setupdatingId] = useState(null);

  return (
    <div className="items">
      {itemsData.map((item, index) => (
        <Item key={item.id} {...item} isLastItem={index == itemsData.length - 1} isUpdating={updatingId == item.id} onDoneClick={() => setupdatingId(null)} onUpdateClick={() => setupdatingId(item.id)} handleDeleteItemClick={handleDeleteItemClick} />
      ))}
    </div>
  );
}

function Item({ id, check, title, isLastItem, isUpdating, onDoneClick, onUpdateClick, handleDeleteItemClick }) {
  const [isChecked, setIsChecked] = useState(check);

  function handleCheckboxChange() {
    setIsChecked(!isChecked);
  }
  return (
    <>
      {isUpdating ? (
        <div className="items__container-item">
          <div className="items__item">
            <input className="items__checkbox" type="checkbox" onChange={handleCheckboxChange} checked={isChecked} />
            <p className="items__title">{title}</p>
          </div>
          <div className="items__buttons">
            <button type="button" className="items__button button--update" onClick={onDoneClick}>
              Done
            </button>
            <button type="button" className="items__button button--delete" onClick={() => handleDeleteItemClick(id)}>
              Delete
            </button>
          </div>
          {!isLastItem && <div className="items__divider"></div>}
        </div>
      ) : (
        <div className="items__container-item">
          <div className="items__item">
            <p className="items__title">{title}</p>
          </div>
          <div className="items__buttons">
            <button type="button" className="items__button button--update" onClick={onUpdateClick}>
              Update
            </button>
          </div>
          {!isLastItem && <div className="items__divider"></div>}
        </div>
      )}
    </>
  );
}

export default Items;
