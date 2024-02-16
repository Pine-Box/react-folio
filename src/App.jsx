import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/HomePage';
import Projects from './components/pages/ProjectsPage';
import Contact from './components/pages/ContactPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <wrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Projects/*" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </wrapper>
        <Footer />
      </div>
    </Router>
  );
}



export default App;        