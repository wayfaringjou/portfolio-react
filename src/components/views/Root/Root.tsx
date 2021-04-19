import React, { ReactElement } from 'react';
import MainNav from '../../common/MainNav';
import Presentation from './Presentation';
import WorkOverview from './WorkOverview';
import Contact from './Contact';

const Root = (): ReactElement => (
  <article id="portfolio-root">
    <div className="navbar-wrapper">
      <div className="wrapper-intermediary">
        <div className="navbar">
          <MainNav />
        </div>
        <div className="content-box">
          <Presentation />
          <WorkOverview />
          <Contact />
        </div>
      </div>
    </div>
  </article>
);

export default Root;
