import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/About/Skills';
import Footer from './Components/Footer/Footer';
import Testimonials from './Components/Testimonials/Testimonials';
import HireMe from './Components/CTA/HireMe';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About/>
      <Skills/>
      <Testimonials/>
      <HireMe/>
      <Footer/>
    </div>
  );
}

export default App;
