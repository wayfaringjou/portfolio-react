import React, { ReactElement } from 'react';
import MainNav from '../../common/MainNav';
import Presentation from './Presentation';

const presStatement = {
  greeting: "Hi, I'm Joel.",
  techIntro: `I'm a software engineer specialized in Javascript, 
  React, Node.js and other modern web development frameworks.`,
  characteristic: 'I create web applications.',
  invitation: "Let's build something together.",
};

const Root = (): ReactElement => (
  <article id="portfolio-root">
    <MainNav />
    <Presentation statement={presStatement} />
    <Projects />
    <Contact />
  </article>
);

export default Root;
