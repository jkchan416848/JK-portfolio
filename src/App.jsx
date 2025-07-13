import "./App.css";
import NavBarContainer from "../src/Components/Navbar";
import { HashRouter } from "react-router-dom";
import Home from "./Components/home";
import About from "./Components/about";
import Contact from "./Components/contact";
import Skills from "./Components/skills";
import Project from "./Components/project";

function App() {
  return (
    <>
      <HashRouter>
        <NavBarContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
