import React, { useContext } from "react";
import { IngridientsListContext } from "../contexts/IngridientsListContext";

const Ingridients = ({ ingridients }) => {
  const { removeIngridients, findItem } = useContext(IngridientsListContext);
  return (
    <li className="list-item">
      <span>{ingridients.title} </span>
      <div>
        <button
          className="btn-delete ingridients-btn"
          onClick={() => removeIngridients(ingridients.id)}
        >
          <i className="fas fa-trash-alt"></i>
        </button>{" "}
        <button
          className="btn-edit ingridients-btn"
          onClick={() => findItem(ingridients.id)}
        >
          <i className="fas fa-pen"></i>
        </button>
      </div>
    </li>
  );
};

export default Ingridients;
