import React, { ReactElement } from 'react';
import MainNav from '../../common/MainNav';
import Presentation from './Presentation';
import WorkOverview from './WorkOverview';
import Contact from './Contact';

const Root = (): ReactElement => (
  <article id="portfolio-root" className="main-grid">
    <Presentation />
    <MainNav />
    <WorkOverview />
    <Contact />
  </article>
);

export default Root;
