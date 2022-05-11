import "../../Styles/Step2.css";
import Footer from "../Footer";
import TopSection from "./TopSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import FifthSection from "./FifthSection";
export default function Step1() {
  return (
    <div>
      <TopSection></TopSection>
      <ThirdSection></ThirdSection>

      <FourthSection></FourthSection>
      <SecondSection></SecondSection>
      <FifthSection></FifthSection>
      <Footer></Footer>
    </div>
  );
}
