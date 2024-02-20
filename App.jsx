import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './src/components/Pages/HomePage';
import Projects from './src/components/Pages/ProjectsPage';
import Contact from './src/components/Pages/ContactPage';
import Navbar from './src/components/Navbar';
import Footer from './src/components/Footer';
import Wrapper from './src/components/Wrapper';
import SocialMedia from './src/components/SocialMedia';
import Header from './src/components/Header';

function App() {
  return (

    <Router>
      <div>
        <Navbar />   
        <Header/> 
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Projects/*" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Wrapper>
        <Footer>
          <SocialMedia />
          </Footer>
      </div>
    </Router>
  );
}

export default App;        