import React from 'react';
import './work-experience.scss';
import TechIcon from "../TechIcon.jsx";
import '../../../src/components/Portfolio/_portfolio.scss';

import reactIcon from '../../../static/images/react.png';
import tsIcon from '../../../static/images/typescript.png';
import viteIcon from '../../../static/images/Vite.js.png';
import figmaIcon from '../../../static/images/figma.png';
import dockerIcon from '../../../static/images/docker.png';
import htmlIcon from '../../../static/images/html-icon.png';
import jsIcon from '../../../static/images/js.png';
import cssIcon from '../../../static/images/css-3.png';
import reduxIcon from '../../../static/images/redux.png';
import webdriverIOIcon from '../../../static/images/webdriverIO.png';
import vitestIcon from '../../../static/images/vitest.png';
import nodeJSIcon from '../../../static/images/nodejs.png';
import tailwindCSSIcon from '../../../static/images/tailwind.png';
import reactTestingLibraryIcon from '../../../static/images/rtl.png';
import cSharpIcon from '../../../static/images/c-sharp.png';
import unityIcon from '../../../static/images/unity.png';
import blenderIcon from '../../../static/images/blender.png';
import illustratorIcon from '../../../static/images/illustrator.png';


const WorkExperience = () => {
  return (
    <section className={'work-exp'} id="work-experience">
      <h2 className={'work-exp__title'}>Work <span>Experience</span></h2>

        <ul className="portfolio__list">
          <li className="portfolio__item">

            <div className="work-exp__content">
              <div className={'portfolio__time-element'}>
                <p>October 2025 - Present</p>
              </div>
              <a className={'work-exp__subtitle'} target={'_blank'} href={''}>Frontend learn</a>
              <p className={'work-exp__person-position'}>Frontend developer</p>
              <p className={'work-exp__description'}>
                I'm studying in college, studying the frontend at the same time.
              </p>
              <ul className="portfolio__icons-list">
                <TechIcon
                  pathsToImg={htmlIcon}
                  titleText={'HTML'}
                />
                <TechIcon
                  pathsToImg={cssIcon}
                  titleText={'CSS'}
                />
                <TechIcon
                  pathsToImg={jsIcon}
                  titleText={'JavaScript'}
                />
                <TechIcon
                  pathsToImg={figmaIcon}
                  titleText={'Figma'}
                />
                <TechIcon
                  pathsToImg={viteIcon}
                  titleText={'ViteJS'}
                />
                <TechIcon
                  pathsToImg={nodeJSIcon}
                  titleText={'Node.JS'}
                />
                <TechIcon
                  pathsToImg={reactIcon}
                  titleText={'React'}
                />
                <TechIcon
                  pathsToImg={reduxIcon}
                  titleText={'Redux (Redux Toolkit)'}
                />
                <TechIcon
                  pathsToImg={tsIcon}
                  titleText={'TypeScript'}
                />
                <TechIcon
                  pathsToImg={vitestIcon}
                  titleText={'Vitest'}
                />
                <TechIcon
                  pathsToImg={reactTestingLibraryIcon}
                  titleText={'React Testing Library'}
                />
                <TechIcon
                  pathsToImg={webdriverIOIcon}
                  titleText={'WebdriverIO'}
                />
                <TechIcon
                  pathsToImg={dockerIcon}
                  titleText={'Docker'}
                />
                <TechIcon
                  pathsToImg={tailwindCSSIcon}
                  titleText={'TailwindCSS'}
                />
              </ul>
            </div>
          </li>
          <li className="portfolio__item">

            <div className="work-exp__content">
              <div className={'portfolio__time-element'}>
                <p>May 2024 - September 2025</p>
              </div>
              <a className={'work-exp__subtitle'} target={'_blank'}>Game creating learn</a>
              <p className={'work-exp__person-position'}>Unity Developer</p>
              <p className={'work-exp__description'}>
                Development of simple, casual, browser-based games on Unity for the Russian platform Yandex Games
              </p>
              <ul className="portfolio__icons-list">
                <TechIcon
                  pathsToImg={cSharpIcon}
                  titleText={'C#'}
                />
                <TechIcon
                  pathsToImg={unityIcon}
                  titleText={'Unity Engine'}
                />
                <TechIcon
                  pathsToImg={blenderIcon}
                  titleText={'Blender 3D'}
                />
                <TechIcon
                  pathsToImg={illustratorIcon}
                  titleText={'Adobe Illustrator'}
                />
              </ul>
            </div>
          </li>
        </ul>
    </section>
  );
};

export default WorkExperience;