import "../../Styles/Step1.css";
import { Link } from "react-router-dom";

export default function FoodSelect() {
  return (
    <div className="App_Step1_foodselect">
      <ul>
        <li>
          <h2>GRAINS</h2>
          <p>Whole grains, Refined grains</p>
          <button>SELECT</button>
        </li>
        <li>
          <h2>PROTEIN</h2>
          <p>
            Sea food, Meat, Poutry,<br></br> Eggs, Nuts, Seed, Soy
          </p>
          <button>SELECT</button>
        </li>
        <li>
          <h2>VEGETABLES & FRUITS </h2>
          <p>All types</p>
          <button>SELECT</button>
        </li>
        <li>
          <h2>Dairy</h2>
          <p>Milk, Yogurt and cheese</p>
          <button>SELECT</button>
        </li>
      </ul>
      <button>
        {" "}
        <Link
          to={{
            pathname: "/step2",
          }}
        >
          Done
        </Link>
      </button>
    </div>
  );
}
