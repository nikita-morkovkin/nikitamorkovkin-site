import React from 'react';
import './_portfolio.scss';
import TechIcon from "../TechIcon.jsx";
import reactIcon from '../../../static/images/react.png';
import axiosIcon from '../../../static/images/axios.png';
import tsIcon from '../../../static/images/typescript.png';
import viteIcon from '../../../static/images/Vite.js.png';
import reactHookFormIcon from '../../../static/images/hook-form.png';
import figmaIcon from '../../../static/images/figma.png';
import dockerIcon from '../../../static/images/docker.png';
import htmlIcon from '../../../static/images/html-icon.png';
import sassIcon from '../../../static/images/sass.png';
import jsIcon from '../../../static/images/js.png';

import sneakersScreenshot from '../../../static/images/sneakers-shop.png';
import dentistUIScreenshot from '../../../static/images/dentistUI.png';
import futureTechScreenshot from '../../../static/images/future-tech-image.png';


const Portfolio = () => {
  return (
    <section className={'portfolio'} id={'portfolio'}>
      <h2 className={'portfolio__title'}>My <span>Portfolio</span></h2>

      <ul className="portfolio__list">
        <li className="portfolio__item">
          <img
            className={'portfolio__item__image'}
            src={futureTechScreenshot}
            alt=""
            width="400" height="800" loading="lazy"
          />

          <div className="portfolio__text-content">
            <div className={'portfolio__time-element'}>
              <p>May 2025</p>
            </div>
            <a className={'portfolio__case-title'} target={'_blank'} href="https://github.com/nikita-morkovkin/master-class-3">Future Tech AI</a>
            <p>Multi-page website for a foreign company engaged in the development and promotion of AI</p>

            <ul className="portfolio__icons-list">
              <TechIcon
                pathsToImg={htmlIcon}
                titleText={'HTML'}
              />

              <TechIcon
                pathsToImg={sassIcon}
                titleText={'SASS'}
              />

              <TechIcon
                pathsToImg={jsIcon}
                titleText={'JavaScript'}
              />

              <TechIcon
                pathsToImg={figmaIcon}
                titleText={'Figma'}
              />
            </ul>
          </div>
        </li>
        <li className="portfolio__item">
          <img
            className={'portfolio__item__image'}
            src={dentistUIScreenshot}
            alt=""
            width="400" height="800" loading="lazy"
          />

          <div className="portfolio__text-content">
            <div className={'portfolio__time-element'}>
              <p>June 2025</p>
            </div>
            <a className={'portfolio__case-title'} target={'_blank'} href="https://github.com/nikita-morkovkin/master-class-2">Dentist UI</a>
            <p>A small landing page for a foreign company providing medical services</p>

            <ul className="portfolio__icons-list">
              <TechIcon
                pathsToImg={reactHookFormIcon}
                titleText={'React Hook Form'}
              />
              <TechIcon
                pathsToImg={figmaIcon}
                titleText={'Figma'}
              />
              <TechIcon
                pathsToImg={dockerIcon}
                titleText={'Docker'}
              />
              <TechIcon
                pathsToImg={viteIcon}
                titleText={'ViteJS'}
              />
            </ul>
          </div>
        </li>
        <li className="portfolio__item">
          <img
            className={'portfolio__item__image'}
            src={sneakersScreenshot}
            alt=""
            width="400" height="800" loading="lazy"
          />

          <div className="portfolio__text-content">
            <div className={'portfolio__time-element'}>
              <p>July 2025</p>
            </div>
            <a className={'portfolio__case-title'} target={'_blank'} href="https://github.com/nikita-morkovkin/sneakers-shop-online">Sneakers Shop</a>
            <p>A small prototype of a shoe sales website</p>

            <ul className="portfolio__icons-list">
              <TechIcon
                pathsToImg={reactIcon}
                titleText={'React'}
              />
              <TechIcon
                pathsToImg={axiosIcon}
                titleText={'Axios'}
              />
              <TechIcon
                pathsToImg={tsIcon}
                titleText={'TypeScript'}
              />
              <TechIcon
                pathsToImg={viteIcon}
                titleText={'ViteJS'}
              />
            </ul>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;