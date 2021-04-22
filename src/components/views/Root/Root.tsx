import React, { ReactElement } from 'react';
import MainNav from '../../common/MainNav';
import Presentation from './Presentation';
import WorkOverview from './WorkOverview';
import Contact from './Contact';

const Root = (): ReactElement => (
  <article id="portfolio-root" className="navbar-wrapper">
    <MainNav />
    <div className="main-grid">
      <section className="gradient-shape">
        <h1 className="text3d">Let&apos;s build something great together!</h1>
      </section>
      <Presentation />
      <WorkOverview />
      <Contact />
    </div>
  </article>
);

export default Root;
