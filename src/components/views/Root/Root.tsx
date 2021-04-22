import React, { ReactElement } from 'react';
import MainNav from '../../common/MainNav';
import Presentation from './Presentation';
import WorkOverview from './WorkOverview';
import Contact from './Contact';

const Root = (): ReactElement => (
  <article id="portfolio-root" className="main-grid">
    <Presentation />
    <section className="sticky-test">
      <ul>
        <li>Work</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </section>
    <section className="sticky-test">
      <ul>
        <li>LinkedIn</li>
        <li>Github</li>
        <li>email</li>
      </ul>
    </section>
    <WorkOverview />
    <Contact />
  </article>
);

export default Root;
