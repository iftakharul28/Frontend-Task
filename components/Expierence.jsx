import Link from 'next/link';
import React, { useState } from 'react';
import { useStateContext } from '../context/StateContext';
import { jobs } from '../lib/data';
import { BiLinkExternal } from 'react-icons/bi';
const Expierence = () => {
  const [job, setJob] = useState(jobs);
  const { value, setValue } = useStateContext();
  const { title, dec, btn_name, btn_url } = job[value];

  return (
    <section className="experience">
      <div className="container">
        <div className="experience__button-wrapper">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`experience__button ${
                  index === value && 'experience__button--active'
                }`}
              >
                {item.title}
              </button>
            );
          })}
        </div>
        <div className="experience__wrapper">
          <div className="experience__first-row">
            <div className="experience__first-row-wrapper">
              <h3>Ad Format</h3>
              <p>Explanation graphics of ad format</p>
              <p>(Image will be changed)</p>
            </div>
          </div>
          <div className="experience__second-row">
            <article className="experience__info-wrapper">
              <h3 className="experience__info-heading">{title}</h3>
              <ul className="experience__info-lists">
                {dec.map((duty, index) => {
                  return (
                    <li className="experience__info-list" key={index}>
                      {duty}
                    </li>
                  );
                })}
              </ul>
              <Link href={btn_url}>
                <a className="experience__info-button">
                  {btn_name}
                  <BiLinkExternal />
                </a>
              </Link>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expierence;
