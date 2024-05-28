import { Routes, Route } from "react-router-dom";

import "./App.css";

import WebsiteLayout from "./pages/WebsiteLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route path="/home" element={<WebsiteLayout />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
