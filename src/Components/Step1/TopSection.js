import "../../Styles/Step1.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

import SearchBar from "./searchBar/searchBar";

export default function TopSection() {
  const [test, setTest] = useState([]);
  const data = [
    { name: "cheese", genre: "cheese" },
    { name: "milk", genre: "milk" },
    { name: "pasta", genre: "pasta" },
    { name: "sour cream", genre: "sour cream" },
    { name: "salami", genre: "salami" },
    { name: "flour", genre: "flour" },
    { name: "olive oil", genre: "olive oil" },
    { name: "baking soda", genre: "baking soda" },
    { name: "pineapple", genre: "pineapple" },
  ];
  console.log(data);
  return (
    <div className="content">
      <SearchBar placeholder="select your ingredients" data={data} />
    </div>
  );
}
