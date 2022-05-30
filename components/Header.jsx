import React from 'react';
import Link from 'next/link';
const Header = () => {
  return (
    <section className="header">
      <div className="container">
        <div className="header__top">
          <img src="/logo.png" alt="logo" className="header__logo" />
          <div className="header__lang-wrapper">
            <span className="header__lang header__lang--active">bn</span> /{' '}
            <span className="header__lang">en</span>
          </div>
        </div>
        <div className="header__wrapper">
          <div className="header__link-wrapper">
            <Link href="/">
              <a className="header__link header__link--active">HOME</a>
            </Link>

            <Link href="/homesecondary">
              <a className="header__link">TASK2</a>
            </Link>

            <Link href="#">
              <a className="header__link">PUBLISHERS</a>
            </Link>

            <Link href="#">
              <a className="header__link">INFLUENCERS</a>
            </Link>

            <Link href="#">
              <a className="header__link">AD FORMATS</a>
            </Link>

            <Link href="#">
              <a className="header__link">BLOG</a>
            </Link>

            <Link href="#">
              <a className="header__link">CONTACT US</a>
            </Link>
          </div>
          <div className="header__button-wrapper">
            <button className="header__button">LOGIN </button>
            <button className="header__button header__button--active">
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
