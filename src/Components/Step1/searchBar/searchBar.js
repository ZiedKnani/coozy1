import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./searchBar.css";
import axios from "axios";
let ingredientsSelected = [];

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const [wordSelected, setWordSelected] = useState("");
  const [ingredients, setIngredients] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  const selectWord = (event) => {
    setWordSelected(wordEntered);
    ingredientsSelected.push(wordSelected);
    setIngredients(ingredientsSelected);
    setWordEntered("");
  };
  //   const postData = (event) => {
  //     ingredientsSelected.push(wordSelected);
  //     setIngredients(ingredientsSelected);
  //     // console.log(ingredients)

  //     axios.post("http://localhost:3000/step1", {
  //       ingredients,
  //     });
  //   };
  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          value={wordEntered}
          placeholder={placeholder}
          onChange={handleFilter}
        />
        <button type="submit" onClick={selectWord}>
          SELECT
        </button>
        <div className="searchIcon"></div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 10).map((value, key) => {
            return (
              <a
                className="dataItem"
                onClick={(event) => {
                  setWordEntered(value.name);
                  setFilteredData([]);
                }}
                target="_blank"
              >
                <p>{value.name}</p>
              </a>
            );
          })}
        </div>
      )}
      <div className="listResult">
        <ul className="list">
          {ingredients.length > 0 && ingredients.map((item) => <li>{item}</li>)}
        </ul>
      </div>
      <div>
        <button type="submit">
          <Link
            to={{
              pathname: "/step2",
            }}
          >
            MATCH
          </Link>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
