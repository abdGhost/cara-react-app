import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Home from "./Home/Home";

export default function WebsiteLayout() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
