import React from 'react';

const Impression = () => {
  return (
    <section className="impression">
      <div className="container">
        <h3 className="impression__heading">Title 1</h3>
        <div className="impression__box-wrapper">
          <div className="impression__box">
            <div className="impression__box-main">
              <h4 className="impression__box-title impression__box-text--white">
                1 BN+
              </h4>
              <p className="impression__box-text impression__box-text--white">
                Daily Impressions
              </p>
            </div>
          </div>
          <div className="impression__box impression__box--bg-white">
            <div className="impression__box-main">
              <h4 className="impression__box-title">$500K+</h4>
              <p className="impression__box-text">Paid</p>
            </div>
          </div>
          <div className="impression__box impression__box--bg-orange">
            <div className="impression__box-main">
              <h4 className="impression__box-title impression__box-text--white">
                8K+
              </h4>
              <p className="impression__box-text impression__box-text--white">
                Global Publishers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impression;
