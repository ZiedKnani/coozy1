import { ReactComponent as ReactLogo1 } from "./arrowR.svg";
import { ReactComponent as ReactLogo2 } from "./arrowL.svg";
import "../../Styles/Step1.css";
import { useState } from "react";

let carouses = [
  <section className="App_Step1_Carous_1">
    <div className="App_Step1_Carous_Orange"></div>
    <article>
      <h1>9 Health Benefits of Eating Oats and Oatmeal</h1>
      <p> </p>
      <button className="button_carous">Learn More</button>
    </article>
    <img src="Media/carou1.jpg" />
  </section>,
  <section className="App_Step1_Carous_2">
    <div className="App_Step1_Carous_Violet"></div>
    <img src="Media/carou2.jpg" />
    <article>
      <h1>Chicken Breast Nutriti​on and Chicken Breast Recipes</h1>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <button className="button_carous">Learn More</button>
    </article>
  </section>,
];

export default function Carous() {
  const [currentCarou, setcurrentCarou] = useState(0);
  return (
    <div className="App_Step1_Carous">
      <ReactLogo2
        height={100}
        onClick={() => {
          currentCarou == 0
            ? setcurrentCarou(carouses.length - 1)
            : setcurrentCarou(currentCarou - 1);
        }}
      />
      {carouses[currentCarou]}
      <ReactLogo1
        height={100}
        onClick={() => {
          currentCarou == carouses.length - 1
            ? setcurrentCarou(0)
            : setcurrentCarou(currentCarou + 1);
        }}
      />
    </div>
  );
}
