import React, { useContext } from "react";
import { IngridientsListContext } from "../contexts/IngridientsListContext";
import Ingridients from "./Ingridients";

const IngridientsList = () => {
  const { ingridients } = useContext(IngridientsListContext);

  return (
    <div>
      {ingridients.length ? (
        <ul className="list">
          {ingridients.map((ingridients) => {
            return (
              <Ingridients ingridients={ingridients} key={ingridients.id} />
            );
          })}
        </ul>
      ) : (
        <div className="no-ingridients">No ingridients</div>
      )}
    </div>
  );
};

export default IngridientsList;
