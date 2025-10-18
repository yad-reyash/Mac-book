import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Product from './components/ProductViewer';

const App = () => {
  return (
   <main>
    <NavBar />
    <Hero />
    <Feature />
    <Footer />
    <ProductViewer />
   </main>
  )
}

export default App
