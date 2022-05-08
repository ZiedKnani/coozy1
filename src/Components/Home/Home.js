import "../../Styles/Home.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TopSection from "./TopSection.js";
import ArticleSection from "./ArticleSection.js";
import MembersSection from "./MembersSection.js";
import ContactSection from "./ContactSection.js";
import Footer from "../Footer.js";

export default function Home() {
  return (
    <div className="App__home">
      <TopSection />
      <ArticleSection />
      <MembersSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
