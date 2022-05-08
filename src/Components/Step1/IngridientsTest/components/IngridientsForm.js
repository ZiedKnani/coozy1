import React, { useState, useContext, useEffect } from "react";
import { IngridientsListContext } from "../contexts/IngridientsListContext";

const IngridientsForm = () => {
  const { addIngridients, clearList, editIngridients, editItem } = useContext(
    IngridientsListContext
  );
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editItem) {
      addIngridients(title);
      setTitle("");
    } else {
      editIngridients(title, editItem.id);
    }
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
      console.log(editItem);
    } else {
      setTitle("");
    }
  }, [editItem]);

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Add Ingridients..."
        value={title}
        onChange={handleChange}
        required
        className="Ingridients-input"
      />
      <div className="buttons">
        <button type="submit" className="btn add-ingridients-btn">
          {editItem ? "Edit Ingridients" : "Add Ingridients"}
        </button>
        <button className="btn clear-btn" onClick={clearList}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default IngridientsForm;
