import { Link } from "react-router-dom";
import "../Styles/Nav.css";

export default function Nav() {
  return (
    <nav className="App__nav">
      <h3>
        <Link
          to={{
            pathname: "/",
          }}
        >
          MENU
        </Link>
      </h3>
      <div className="App__nav__logo">
        <img src="Media/logo.png"></img>
      </div>
    </nav>
  );
}
