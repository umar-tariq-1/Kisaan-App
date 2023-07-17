import Navbar from "../../components/Navbar/navbar";
import HomeContent from "./homecontent";
import HomeFeatures from "./homefeatures";
export default function Home() {
  return (
    <div>
      <Navbar home={1} />
      <HomeContent />
      <HomeFeatures />
    </div>
  );
}
