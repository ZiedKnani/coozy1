import "../../Styles/Step1.css";
import Footer from "../Footer";
import Carous from "./Carous";
import FoodSelect from "./FoodSelect";
import TopSection from "./TopSection";

export default function Step1() {
  return (
    <div>
      <TopSection></TopSection>
      <FoodSelect></FoodSelect>
      <Carous></Carous>
      <Footer></Footer>
    </div>
  );
}
