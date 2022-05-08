import "../../Styles/Home.css";

export default function ContactSection() {
  return (
    <section className="App_home_contact_section">
      <article>
        <h1>Help Us 24/7</h1>
        <h2>Do you have any suggestions for us ?</h2>
        <p>
          Help us update this application by giving us FeedBack and suggestions
        </p>
        <ul>
          <li>65 Street, Network City, NYPD</li>
          <li>Which don’t Look Even Slightly Believable</li>
          <li>+1 222 545 55 44</li>
        </ul>
        <h3>Quick Support Number (+99 6984 5698 56)</h3>
      </article>
      <form>
        <h1>Contact Us</h1>
        <h2>Request A Quote</h2>
        <div>
          <label htmlFor="name">Name</label>
          <input name="Name" placeholder="Enter Your Name" />
          <label htmlFor="message">Message</label>
          <textarea name="message" placeholder="Enter your message"></textarea>
          <div className="button_container">
            <input type="submit" value="Submit" />
          </div>
        </div>
      </form>
    </section>
  );
}
