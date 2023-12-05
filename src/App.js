import React from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Footer from './components/Footer';
import './styles.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Footer />
    </div>
  );
};

export default App;