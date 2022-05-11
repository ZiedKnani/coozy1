import { useState } from "react";
import "../../Styles/Step2.css";
import { ReactComponent as ReactLogo1 } from "./al.svg";
import { ReactComponent as ReactLogo2 } from "./ar.svg";
import recipes from "./recipes.json";

export default function ThirdSection() {
  const [item, setitem] = useState([]);
  return (
    <section className="App_step2_third">
      <h3>MATCHES</h3>
      <div className="App_step2_third_content">
        <ReactLogo1 width={40} height={40} />
        {recipes.map((recipe) => {
          return (
            <ul className="item" key={recipe.id}>
              <li>
                <h2> {recipe.name} </h2>

                <p1>
                  {" "}
                  {recipe.primaryIngredients}
                  {"\n"}
                </p1>
                <h5> {recipe.ingridients} </h5>
                <button hreff="recipe.link">learn more</button>
              </li>
            </ul>
          );
        })}

        <ReactLogo2 width={40} height={40} />
      </div>
    </section>
  );
}
