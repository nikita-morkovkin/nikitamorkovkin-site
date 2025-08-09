import React from 'react';
import './_greeting.scss';
import {motion} from 'framer-motion';
import greetingImage from '../../../static/images/image-transparent.png';
import linkButtonVariants from "./linkButtonVariants.js";

const Greeting = () => {
  return (
    <section className={'greeting'} id={'about'}>
      <div className={'greeting__content'}>
        <div className="greeting__title">
          <p><span>Hello!</span> My name is <br /> Nikita Morkovkin.</p>
          <p>I can do some great <br /> things for you.</p>

          <motion.a
            initial={linkButtonVariants.initial}
            whileHover={linkButtonVariants.hover}
            whileTap={linkButtonVariants.click}
            transition={{
              duration: 0.2
            }}
            className={'greeting__button'}
            type="button"
            href={'#contacts'}
          >
            Let's check!
          </motion.a>
        </div>
      </div>

      <div className="greeting__image">
        <img
          src={greetingImage}
          alt=""
          width="520" height="520"
        />
      </div>
    </section>
  );
};

export default Greeting;