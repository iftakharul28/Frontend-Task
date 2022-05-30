import React from 'react';

import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineYoutube } from 'react-icons/ai';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__first-row">
            <h4 className="footer__heading">We are social</h4>
            <p className="footer__subheading">FOLLOW US</p>
            <div className="footer__social-link-wrapper">
              <a href="#" aria-label="Instagram">
                <BsInstagram size={25} className="footer__social-link" />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebookF size={25} className="footer__social-link" />
              </a>
              <a href="#" aria-label="Youtube">
                <AiOutlineYoutube size={25} className="footer__social-link" />
              </a>
            </div>
            <img src="/logo.png" alt="logo" />
          </div>
          <div className="footer__second-row">
            <div className="footer__links-wrapper">
              <div className="footer__links">
                <p className="footer__links-title">Links</p>
                <div className="footer__link-wrapper">
                  <a className="footer__link footer__link-primary" href="#">
                    ADVERTISERS
                  </a>
                  <a className="footer__link footer__link-primary" href="#">
                    PUBLISHERS
                  </a>
                  <a className="footer__link footer__link-primary" href="#">
                    INFLUENCERS
                  </a>
                  <a className="footer__link footer__link-primary" href="#">
                    AD FORMATS
                  </a>
                </div>
              </div>
              <div className="footer__links">
                <p className="footer__links-title">Documentation</p>
                <div className="footer__link-wrapper">
                  <a className="footer__link footer__link-primary" href="#">
                    TERMS & CONDITIONS
                  </a>
                  <a className="footer__link footer__link-primary" href="#">
                    PRIVACY POLICY
                  </a>
                  <a className="footer__link footer__link-primary" href="#">
                    CANCELLATION POLICY
                  </a>
                  <a className="footer__link footer__link-primary" href="#">
                    BLOG
                  </a>
                </div>
              </div>
              <div className="footer__links">
                <p className="footer__links-title">Support</p>
                <div className="footer__link-wrapper">
                  <a className="footer__link footer__link-secondery" href="#">
                    FAQ
                  </a>
                  <a className="footer__link footer__link-secondery" href="#">
                    MEDIA KIT
                  </a>
                  <a className="footer__link footer__link-secondery" href="#">
                    CONTACT US
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
