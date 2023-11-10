import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Education from "./pages/education";
import Projects from "./pages/projects";
import Skill from "./pages/skill";
import All from "./pages/skill/all";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Fronted from "./pages/skill/frontend";
import Backend from "./pages/skill/backend";
import Framework from "./pages/skill/framework";
import Database from "./pages/skill/database";
import Design from "./pages/skill/design";

function App() {
  return (
  <div className="bg-indigo-950">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />

          <Route path="/skill" element={<Skill />}>
            <Route path="" element={<All />} />
            <Route path="frontend" element={<Fronted/>} />
            <Route path="backend" element={<Backend />} />
            <Route path="framework" element={<Framework/>} />
            <Route path="database" element={<Database/>}/>
            <Route path="design" element={<Design/>}/>
          
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
