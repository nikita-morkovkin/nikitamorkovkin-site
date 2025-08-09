import React from 'react';
import './_my-skills.scss';
import {motion} from 'framer-motion';
import listLeftItemVariants from "./listLeftItemVariants.js";
import listRightItemVariants from "./listRightItemVariants.js";

const MySkills = () => {
  return (
    <section
      className={'my-skills'}
      id={'skills'}
    >
      <div className={'my-skills__container'}>
        <h2 className={'my-skills__title'}><span>Hard</span> Skills</h2>
        <ul className={'my-skills__list'}>
          <motion.li
            initial={listLeftItemVariants.initial}
            whileInView={listLeftItemVariants.animate}
            transition={{
              duration: 0.2,
            }}
            className={'my-skills__item'}
          >
            HTML (HTML5), JSX
          </motion.li>
          <motion.li
            initial={listLeftItemVariants.initial}
            transition={{
              duration: 0.2,
            }}
            whileInView={listLeftItemVariants.animate}
            className={'my-skills__item'}
          >
            CSS SASS (SCSS), Tailwind, Framer Motion
          </motion.li>
          <motion.li
            initial={listLeftItemVariants.initial}
            transition={{
              duration: 0.2,
            }}
            whileInView={listLeftItemVariants.animate}
            className={'my-skills__item'}
          >
            JavaScript, TypeScript
          </motion.li>
          <motion.li
            initial={listLeftItemVariants.initial}
            transition={{
              duration: 0.2,
            }}
            whileInView={listLeftItemVariants.animate}
            className={'my-skills__item'}
          >
            React
          </motion.li>
          <motion.li
            initial={listLeftItemVariants.initial}
            transition={{
              duration: 0.2,
            }}
            whileInView={listLeftItemVariants.animate}
            className={'my-skills__item'}
          >
            Redux (Redux Toolkit), Zustand
          </motion.li>
          <motion.li
            initial={listLeftItemVariants.initial}
            transition={{
              duration: 0.2,
            }}
            whileInView={listLeftItemVariants.animate}
            className={'my-skills__item'}
          >
            React Hook Form, Yup, Axios, React Router, React Query
          </motion.li>
          <motion.li
            initial={listLeftItemVariants.initial}
            transition={{
              duration: 0.2,
            }}
            whileInView={listLeftItemVariants.animate}
            className={'my-skills__item'}
          >
            Vite, Webpack
          </motion.li>
          <motion.li
            initial={listLeftItemVariants.initial}
            transition={{
              duration: 0.2,
            }}
            whileInView={listLeftItemVariants.animate}
            className={'my-skills__item'}
          >
            Jest, Vitest, React Testing Library, WebdriverIO
          </motion.li>
          <motion.li
            initial={listLeftItemVariants.initial}
            transition={{
              duration: 0.2,
            }}
            whileInView={listLeftItemVariants.animate}
            className={'my-skills__item'}
          >
            Git (GitHub)
          </motion.li>
          <motion.li
            initial={listLeftItemVariants.initial}
            transition={{
              duration: 0.2,
            }}
            whileInView={listLeftItemVariants.animate}
            className={'my-skills__item'}
          >
            Figma, Photoshop, work with AI
          </motion.li>
          <motion.li
            initial={listLeftItemVariants.initial}
            transition={{
              duration: 0.2,
            }}
            whileInView={listLeftItemVariants.animate}
            className={'my-skills__item'}
          >
            English level - B2
          </motion.li>
        </ul>
      </div>

      <div className="my-skills__container">
        <h2 className={'my-skills__title'}><span>Soft</span> Skills</h2>
        <ul className={'my-skills__list'}>
          <motion.li
            initial={listRightItemVariants.initial}
            whileInView={listRightItemVariants.animate}
            transition={{
              duration: 0.2,
            }}
            className={'my-skills__item'}
          >
            I am responsible about deadlines
          </motion.li>
          <motion.li
            initial={listRightItemVariants.initial}
            whileInView={listRightItemVariants.animate}
            transition={{
              duration: 0.2,
            }}
            className={'my-skills__item'}
          >
            I am demanding of the quality of my code, I follow the code-style
          </motion.li>
          <motion.li
            initial={listRightItemVariants.initial}
            whileInView={listRightItemVariants.animate}
            transition={{
              duration: 0.2,
            }}
            className={'my-skills__item'}
          >
            I welcome constructive criticism and am always happy to find new points of professional and personal growth
          </motion.li>
          <motion.li
            initial={listRightItemVariants.initial}
            whileInView={listRightItemVariants.animate}
            transition={{
              duration: 0.2,
            }}
            className="my-skills__item"
          >
            I am attentive to the details of the terms of reference
          </motion.li>
          <motion.li
            initial={listRightItemVariants.initial}
            whileInView={listRightItemVariants.animate}
            transition={{
              duration: 0.2,
            }}
            className={'my-skills__item'}
          >
            I know how to solve conflict situations
          </motion.li>
          <motion.li
            initial={listRightItemVariants.initial}
            whileInView={listRightItemVariants.animate}
            transition={{
              duration: 0.2,
            }}
            className={'my-skills__item'}
          >
            I write detailed reports on the work done, if required
          </motion.li>
          <motion.li
            initial={listRightItemVariants.initial}
            whileInView={listRightItemVariants.animate}
            transition={{
              duration: 0.2,
            }}
            className="my-skills__item"
          >
            I am correctly convey thoughts, formulate questions
          </motion.li>
          <motion.li
            initial={listRightItemVariants.initial}
            whileInView={listRightItemVariants.animate}
            transition={{
              duration: 0.2,
            }}
            className={'my-skills__item'}
          >
            I am motivated to improve my skills, constantly studying new technologies in my field of activity
          </motion.li>
        </ul>
      </div>
    </section>
  );
};

export default MySkills;