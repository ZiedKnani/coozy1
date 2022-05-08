import "../../Styles/Step1.css";

import Home from "./searchPage/Home.js";
import IngridientsTest from "./IngridientsTest/IngridientsTest.js";

export default function TopSection() {
  return (
    <section className="App_step2_top">
      <div className="content">
        <IngridientsTest />
      </div>
    </section>
  );
}
