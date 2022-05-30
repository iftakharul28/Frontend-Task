import Link from 'next/link';
import React from 'react';

import { AiOutlineMenu } from 'react-icons/ai';
const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar__wrapper">
          <div className="navbar__image-wrapper">
            <Link href="/">
              <a>
                <img src="/logo.png" alt="logo" className="header__logo" />
              </a>
            </Link>
          </div>
          <nav className="navbar__link-wrapper">
            <Link href="/">
              <a className="navbar__link">HOME</a>
            </Link>

            <Link href="/homesecondary">
              <a className="navbar__link">TASK2</a>
            </Link>

            <Link href="#">
              <a className="navbar__link">PUBLISHERS</a>
            </Link>

            <Link href="#">
              <a className="navbar__link">BLOG</a>
            </Link>

            <Link href="#">
              <a className="navbar__link">CONTACT US</a>
            </Link>
          </nav>
          <AiOutlineMenu size={25} className="navbar__icon" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
