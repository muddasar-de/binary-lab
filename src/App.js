import React from 'react';
import './App.css';
import { Navbar, CTA } from './components/';
import {
  Blog,
  Features,
  Header,
  Footer,
  WhatisBL,
  Possibility,
} from './containers';
const App = () => {
  return (
    <div className='gradient__bg'>
      <Navbar />
      <Header />
      <WhatisBL />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
