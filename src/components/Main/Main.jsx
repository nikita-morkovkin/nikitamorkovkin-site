import React from 'react';
import './_main.scss';
import Greeting from "../Greeting/Greeting.jsx";
import MySkills from "../MySkills/MySkills.jsx";
import Portfolio from "../Portfolio/Portfolio.jsx";
import WorkExperience from "../WorkExperience/WorkExperience.jsx";

const Main = () => {
  return (
    <main className={'main'}>
      <Greeting />
      <MySkills />
      <Portfolio />
      <WorkExperience />
    </main>
  );
};

export default Main;