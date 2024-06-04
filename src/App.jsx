import { Routes, Route } from "react-router-dom";

import "./App.css";

import WebsiteLayout from "./pages/WebsiteLayout";
import Shop from "./pages/Shop/Shop";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route path="/home" element={<WebsiteLayout />}></Route>{" "}
          <Route path="/shop" element={<Shop />}></Route>{" "}
          <Route path="/blog" element={<WebsiteLayout />}></Route>{" "}
          <Route path="/about" element={<WebsiteLayout />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
