import { Link } from "react-router-dom";
import "../../Styles/Home.css";

export default function TopSection() {
  return (
    <section className="App__home_top">
      <video autoPlay={true} loop muted={true}>
        <source src="Media/vid.mp4" type="video/mp4" />
        <p>Your browser does not support HTML5 video.</p>
      </video>
      <h3>WELCOME TO</h3>
      <div className="App__home__top__logo">
        <img src="Media/logo.png"></img>
      </div>
      <div className="App_home__top_button">
        <img
          src="Media/btn_icon.png"
          className="App_home_top_button_icon"
        ></img>
        <p className="App_home_top_button_text">
          {" "}
          <Link
            to={{
              pathname: "/step1",
            }}
          >
            START
          </Link>
        </p>
      </div>
    </section>
  );
}
