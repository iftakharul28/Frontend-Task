import React from 'react';

import { HiSpeakerphone } from 'react-icons/hi';
import { FaPaperPlane } from 'react-icons/fa';
import { BsPersonCircle } from 'react-icons/bs';
const Connect = () => {
  return (
    <section className="connect">
      <div className="container">
        <h2 className="connect__heading">Save time, save money</h2>
        <div className="connect__icons">
          <div className="connect__icon-wrapper">
            <div className="connect__icon">
              <HiSpeakerphone size={80} />
            </div>
            <h3 className="connect__icon-text">Text 1</h3>
            <button className="connect__icon-button">Hello 1</button>
          </div>
          <div className="connect__icon-wrapper">
            <div className="connect__icon">
              <FaPaperPlane size={80} />
            </div>
            <h3 className="connect__icon-text">Text 2</h3>
            <button className="connect__icon-button">Hello 2</button>
          </div>
          <div className="connect__icon-wrapper">
            <div className="connect__icon">
              <BsPersonCircle size={80} />
            </div>
            <h3 className="connect__icon-text">Text 3</h3>
            <button className="connect__icon-button">Hello 3</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
