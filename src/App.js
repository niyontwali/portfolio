import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Projects from "./components/Projects";

/* =============================================
App Function Component
This is where all the routes to the app shall be 
put in order to be rendered in our root file
============================================== */

const App = () => {
  return (
    <Router>
      <div className="font-roboto tracking-wider">
        <Navbar />
        <React.StrictMode>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contactme" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </React.StrictMode>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
