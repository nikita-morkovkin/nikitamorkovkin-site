import React from 'react';
import './_greeting.scss';
import greetingImage from '../../../static/images/image-transparent.png';

const Greeting = () => {
  return (
    <section className={'greeting'} id={'about'}>
      <div className={'greeting__content'}>
        <div className="greeting__title">
          <p><span>Hello!</span> My name is <br /> Nikita Morkovkin.</p>
          <p>I can do some great <br /> things for you.</p>

          <a
            className={'greeting__button'}
            type="button"
            href={'#contacts'}
          >
            Let's check!
          </a>
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