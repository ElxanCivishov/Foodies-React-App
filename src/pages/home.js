import MainHeaderSection from "../components/MainHeaderSection/mainHeaderSection";
import ImproveSkills from "../components/Improve/improveSkills";
import Quote from "../components/Quote/quote";
import Chefs from "../components/Chefs/chefs";

export default function Home() {
  return (
    <div>
      <MainHeaderSection />
      <ImproveSkills />
      <Quote />
      <Chefs />
    </div>
  );
}
