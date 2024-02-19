import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Pages/HomePage';
import Projects from './components/Pages/ProjectsPage';
import Contact from './components/Pages/ContactPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
import SocialMedia from './components/SocialMedia';
import Header from './components/Header';

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