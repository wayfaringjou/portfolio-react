import * as React from 'react';
import MainNav from '../../common/MainNav';
import Presentation from './Presentation';
import WorkOverview from './WorkOverview';
import Contact from './Contact';
import About from './About';
import Footer from '../../common/Footer';
import circle from '../../../img/circle.svg';

import useInterserctionObserver from '../../../hooks/useIntersectionObserver';

/*
const observerOptions = {
  root: null,
  rootMargin: '-30px 0px 0px 0px',
  threshold: 0.25,
};
*/

const Root = (): React.ReactElement => {
  const navRef = React.useRef(null);

  const observerOptions = {
    root: null,
    rootMargin: '-10px 0px 0px 0px',
    threshold: 1,
  };

  // Shade nav after passing header illustration
  const [presRef, presEntry] = useInterserctionObserver(observerOptions);

  return (
    <article id="portfolio-root" className="[ root-container ]">
      <MainNav presEntryProp={presEntry} />
      <Presentation presRef={presRef} />
      <WorkOverview />
      <About />
      <Contact />
      <Footer />
    </article>
  );
};

export default Root;
