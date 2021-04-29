import React, { ReactElement } from 'react';
import MainNav from '../../common/MainNav';
import Presentation from './Presentation';
import WorkOverview from './WorkOverview';
import Contact from './Contact';
import About from './About';

const Root = (): ReactElement => (
  <article id="portfolio-root" className="main-grid">
    <Presentation />
    <MainNav />
    <WorkOverview />
    <About />
    <Contact />
  </article>
);

export default Root;
