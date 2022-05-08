import "../../Styles/Home.css";

export default function MembersSection() {
  return (
    <section className="App_home_article_section_team">
      <h2>Meet The Team</h2>
      <h3>
        We are a team of ambitious computer science students, who want to make
        cooking a better experience.
      </h3>
      <div className="App_home_article_section_team_members">
        <div className="orange"></div>
        <ul>
          <li>
            <img src="Media/Members/chaima.jpg"></img>
            <h4>Chaima Ben Yedder</h4>
            <p>WEB DEVELOPPER</p>
          </li>
          <li>
            <img src="Media/Members/zied.jpg"></img>
            <h4>Zied Knani</h4>
            <p>WEB DEVELOPPER</p>
          </li>
          <li>
            <img src="Media/Members/ons.jpg"></img>
            <h4>Ons Ouenniche</h4>
            <p>WEB DEVELOPPER </p>
          </li>
          <li>
            <img src="Media/Members/yasmine.jpg"></img>
            <h4>Yasmine Filali</h4>
            <p>DATA MANAGER</p>
          </li>
          <li>
            <img src="Media/Members/omar.jpg"></img>
            <h4>Omar Trabelsi</h4>
            <p>DESIGNER AND MARKETER</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
