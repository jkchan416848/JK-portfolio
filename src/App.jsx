import "./App.css";
import NavBarContainer from "../src/Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/home";
import About from "./Components/about";
import Contact from "./Components/contact";
import Skills from "./Components/skills";
import Project from "./Components/project";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBarContainer />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/project" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
