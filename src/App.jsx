import { Routes, Route } from "react-router-dom";

import "./App.css";

import WebsiteLayout from "./pages/WebsiteLayout";
import Shop from "./pages/Shop/Shop";
import Blog from "./pages/Blog/Blog";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route path="/home" element={<WebsiteLayout />}></Route>{" "}
          {/* <Route path="/shop" element={<Shop />}></Route>{" "} */}
          {/* <Route path="/blog" element={<WebsiteLayout />}></Route>{" "} */}
          {/* <Route path="/about" element={<WebsiteLayout />}></Route> */}
        </Route>{" "}
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
