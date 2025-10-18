import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Feature from './components/Feature';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import Showcase from './components/Showcase';
import Footer from './components/Footer';
import ProductViewer from './components/ProductViewer';
import Highlights from './components/Highlights';
import Performance from './components/Performance';

const App = () => {
  return (
   <main>
    <NavBar />
    <Hero /> 
  <ProductViewer />
  <Performance />
  <Showcase />
  <Feature />
  <Highlights />
  <Footer />
    
  
   </main>
  )
}

export default App
