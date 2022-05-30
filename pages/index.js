import React from 'react';
import {
  Header,
  Footer,
  Connect,
  Expierence,
  Hero,
  Impression,
  Slider,
} from '../components';
const Home = () => {
  return (
    <>
      <Header />
      <main className="main-container">
        <Hero />
        <Connect />
        <Expierence />
        <Impression />
        <Slider />
      </main>
      <Footer />
    </>
  );
};
export default Home;
