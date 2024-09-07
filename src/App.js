import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/About/Skills';
import Footer from './Components/Footer/Footer';
import HireMe from './Components/CTA/HireMe';
import Projects from './Components/Projects/Projects';
import ProjectList from './Components/Projects/ProjectList';
import Contact from './Components/CTA/Contact';
import './style.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <ProjectList />
      <Contact />
      <HireMe />
      <Footer />
    </div>
  );
}

export default App;
