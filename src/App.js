import React from 'react';
import HeroHeader from '../src/components/HeroHeader/index.jsx';
import About from '../src/components/About/index.jsx';
import Services from '../src/components/Services/index.jsx';
import Contact from '../src/components/Contact/index.jsx';
import Footer from '../src/components/Footer/index.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeroHeader />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
