import React from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import News from './components/News';
import Contact from './components/Contact';
import Donate from './components/Donate';
import Footer from './components/Footer';
import Navbar1 from './components/Navbar1';




import './styles.css';

function App() {
  return (
    <div>
      
       <Slider/>
       <Home/>
       <About/>
       <Events/>
       <News/>
       <Donate/>
       <Contact />
       
      <Footer/>
      
     
       {/*   <Header /> 
 <Home />
      <About />
      <Events />
      <News />
      <Contact />
      <Gallery />
      <Donate />
      <Footer /> */}
    </div>
  );
}

export default App;
