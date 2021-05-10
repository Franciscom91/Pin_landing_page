import './App.scss'
import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Services from './components/Services/Services';
import Contact from './containers/Contact/Contact';
import Footer from './components/Footer/Footer'

const App =() => {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Products />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
