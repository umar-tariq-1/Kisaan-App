import HomeContent from "./homecontent";
import HomeFeatures from "./homefeatures";
import Navbar from "../../components/Navbar/navbar";

export default function Home() {
  return (
    <div>
      <Navbar Home={1} />
      <HomeContent />
      <HomeFeatures />
    </div>
  );
}
