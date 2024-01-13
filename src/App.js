import Navbar from "./components/Navbar.jsx";
import Webpage1 from "./components/Webpage1.jsx";
import { Route, Routes } from "react-router-dom";
import Webpage2 from "./components/Webpage2.jsx";
import Webpage3 from "./components/Webpage3.jsx";
import Webpage4 from "./components/Webpage4.jsx";
import Webpage5 from "./components/Webpage5.jsx";
import Webpage8 from "./components/Webpage8.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="" element={<Webpage1 />} />
        <Route exact path="About" element={<Webpage2 />} />
        <Route exact path="Contact" element={<Webpage3 />} />
        <Route exact path="connect" element={<Webpage4 />} />
        <Route exact path="home" element={<Webpage8 />} />
      </Routes>
    </>
  );
};

export default App;
