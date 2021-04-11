import React, { ReactElement } from 'react';
import Presentation from './Presentation';

const presStatement = {
  greeting: "Hi, I'm Joel.",
  techIntro: `I'm a software engineer specialized in Javascript, 
  React, Node.js and other modern web development frameworks.`,
  characteristic: 'I bring a background of experience working with communities to ',
  invitation: 'Let\'s build something great.',
};

const Root = (): ReactElement => (
  <article id="portfolio-root">
    <MainNav />
    <Presentation />
    <Projects />
    <Contact />
  </article>
);

export default Root;
