import React from "react";
import IngridientsListContextProvider from "./contexts/IngridientsListContext";
import IngridientsList from "./components/IngridientsList";
import IngridientsForm from "./components/IngridientsForm";
import "./Ingridients.css";
import Header from "./components/Header";

const IngridientsTest = () => {
  return (
    <IngridientsListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <IngridientsForm />
            <IngridientsList />
          </div>
        </div>
      </div>
    </IngridientsListContextProvider>
  );
};

export default IngridientsTest;
