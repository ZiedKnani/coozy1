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
            <div className="item" key={recipe.id}>
              <h2> {recipe.name} </h2>

              <p>
                <p1>{recipe.selectedIngredients.length} matched ingredients</p1>
                <br />
                <p2>
                  {recipe.primaryIngredients.length -
                    recipe.selectedIngredients.length}{" "}
                  missing ingridients{" "}
                </p2>
              </p>
              <button hreff="recipe.link">learn more</button>
            </div>
          );
        })}

        <ReactLogo2 width={40} height={40} />
      </div>
    </section>
  );
}
