import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const IngridientsListContext = createContext();

const IngridientsListContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("ingridients")) || [];

  const [ingridients, setIngridients] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("ingridients", JSON.stringify(ingridients));
  }, [ingridients]);

  const [editItem, setEditItem] = useState(null);

  // Add tasks
  const addIngridients = (title) => {
    setIngridients([...ingridients, { title, id: uuidv4() }]);
  };

  // Remove tasks
  const removeIngridients = (id) => {
    setIngridients(ingridients.filter((ingridients) => ingridients.id !== id));
  };

  // Clear tasks
  const clearList = () => {
    setIngridients([]);
  };

  // Find task
  const findItem = (id) => {
    const item = ingridients.find((ingridients) => ingridients.id === id);

    setEditItem(item);
  };

  // Edit task
  const editIngridients = (title, id) => {
    const newIngridients = ingridients.map((ingridients) =>
      ingridients.id === id ? { title, id } : ingridients
    );

    console.log(newIngridients);

    setIngridients(newIngridients);
    setEditItem(null);
  };

  return (
    <IngridientsListContext.Provider
      value={{
        ingridients,
        addIngridients,
        removeIngridients,
        clearList,
        findItem,
        editIngridients,
        editItem,
      }}
    >
      {props.children}
    </IngridientsListContext.Provider>
  );
};

export default IngridientsListContextProvider;
