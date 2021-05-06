import * as React from 'react';
import MainNav from '../../common/MainNav';
import Presentation from './Presentation';
import WorkOverview from './WorkOverview';
import Contact from './Contact';
import About from './About';

import useIntersectionOberver from '../../../hooks/useIntersectionObserver';

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0,
};

const Root = (): React.ReactElement => (
  <article id="portfolio-root" className="main-grid">
    <MainNav />
    <Presentation />
    <WorkOverview />
    <About />
    <Contact />
  </article>
);

export default Root;
