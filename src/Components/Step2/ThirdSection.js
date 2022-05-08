import { useState } from "react";
import "../../Styles/Step2.css";
import { ReactComponent as ReactLogo1 } from "./al.svg";
import { ReactComponent as ReactLogo2 } from "./ar.svg";

let items = [
  <div className="item">
    <img src="Media/Step2/fr.jpg" />
    <h3>Fricassé</h3>
    <p>
      Head to Tunisia with this recipe for Tunisian fricassee, which are nothing
      but fried rolls and often garnished with a mixture of potatoes cut into
      cubes, olives, tuna and hard-boiled eggs.
    </p>
  </div>,
  <div className="item">
    <img src="Media/Step2/def.jpg" />
    <h3>Sample Headline</h3>
    <p>
      Sample text. Click to select the text box. Click again or double click to
      start editing the text. Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div>,
];

export default function ThirdSection() {
  const [item, setitem] = useState(0);
  return (
    <section className="App_step2_third">
      <h3>MATCHES</h3>
      <div className="App_step2_third_content">
        <ReactLogo1
          width={40}
          height={40}
          onClick={() => {
            if (item == 0) setitem(items.length - 1);
            else setitem(item - 1);
          }}
        />
        {items[item]}
        <ReactLogo2
          onClick={() => {
            if (item == items.length - 1) setitem(0);
            else setitem(item + 1);
          }}
          width={40}
          height={40}
        />
      </div>
    </section>
  );
}
