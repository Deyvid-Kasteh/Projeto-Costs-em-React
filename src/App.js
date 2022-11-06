import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Container from "./components/layout/Container";

import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Company from "./components/pages/Company";
import NewProject from "./components/pages/NewProject";
import Projects from "./components/pages/projects";


import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/company" element={<Company />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />

          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>

      <Footer />
    </Router>
  );
}

export default App;
