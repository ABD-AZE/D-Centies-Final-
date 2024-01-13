import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Webpage1 from "./components/Webpage1.js";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="" element={<Home />} />
        <Route exact path="About" element={<Webpage1 />} />
      </Routes>
    </>
  );
};

export default App;
