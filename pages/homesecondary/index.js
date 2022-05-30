import React from 'react';

import { HeroSecondary, Navbar } from '../../components';
const HomeSecondary = () => {
  return (
    <>
      <Navbar />
      <main className="main-container">
        <HeroSecondary />
      </main>
    </>
  );
};

export default HomeSecondary;
