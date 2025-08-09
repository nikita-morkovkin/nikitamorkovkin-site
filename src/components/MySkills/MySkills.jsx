import React from 'react';
import './_my-skills.scss';

const MySkills = () => {
  return (
    <section className={'my-skills'} id={'skills'}>
      <div className={'my-skills__container'}>
        <h2 className={'my-skills__title'}><span>Hard</span> Skills</h2>
        <ul className={'my-skills__list'}>
          <li className={'my-skills__item'}>
            HTML (HTML5), JSX
          </li>
          <li className={'my-skills__item'}>
            CSS SASS (SCSS), Tailwind, Framer Motion
          </li>
          <li className={'my-skills__item'}>
            JavaScript, TypeScript
          </li>
          <li className={'my-skills__item'}>
            React
          </li>
          <li className={'my-skills__item'}>
            Redux (Redux Toolkit), Zustand
          </li>
          <li className={'my-skills__item'}>
            React Hook Form, Yup, Axios, React Router, React Query
          </li>
          <li className={'my-skills__item'}>
            Vite, Webpack
          </li>
          <li className={'my-skills__item'}>
            Jest, Vitest, React Testing Library, WebdriverIO
          </li>
          <li className={'my-skills__item'}>
            Git (GitHub)
          </li>
          <li className={'my-skills__item'}>
            Figma, Photoshop, work with AI
          </li>
          <li className={'my-skills__item'}>
            English level - B2
          </li>
        </ul>
      </div>

      <div className="my-skills__container">
        <h2 className={'my-skills__title'}><span>Soft</span> Skills</h2>
        <ul className={'my-skills__list'}>
          <li className={'my-skills__item'}>
            I am responsible about deadlines
          </li>
          <li className={'my-skills__item'}>
            I am demanding of the quality of my code, I follow the code-style
          </li>
          <li className={'my-skills__item'}>
            I welcome constructive criticism and am always happy to find new points of professional and personal growth
          </li>
          <li className="my-skills__item">
            I am attentive to the details of the terms of reference
          </li>
          <li className={'my-skills__item'}>
            I know how to solve conflict situations
          </li>
          <li className={'my-skills__item'}>
            I write detailed reports on the work done, if required
          </li>
          <li className="my-skills__item">
            I am correctly convey thoughts, formulate questions
          </li>
          <li className={'my-skills__item'}>
            I am motivated to improve my skills, constantly studying new technologies in my field of activity
          </li>
        </ul>
      </div>
    </section>
  );
};

export default MySkills;