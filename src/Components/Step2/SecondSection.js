import { useState } from "react";
import "../../Styles/Step2.css";

let items = [
  <p></p>,
  <p>
    Sample text. Click to select the text box. Click again or double click to
    start editing the text. Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur.
  </p>,
  <>
    <h3>Be The First To Review This Product!</h3>
    <p>
      Sample text. Click to select the text box. Click again or double click to
      start editing the text.
    </p>
    <button>WRITE PRODUCT REVIEW</button>
  </>,
];

export default function SecondSection() {
  const [item, setitem] = useState(0);
  return (
    <section className="App_step2_second">
      <ul>
        <li onClick={() => setitem(0)}>ORIGIN</li>
        <li onClick={() => setitem(1)}>HEALTH</li>
        <li onClick={() => setitem(2)}>REVIEWS</li>
      </ul>
      <article>{items[item]}</article>
    </section>
  );
}
