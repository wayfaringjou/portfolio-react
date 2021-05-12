import * as React from 'react';
import MainNav from '../../common/MainNav';
import Presentation from './Presentation';
import WorkOverview from './WorkOverview';
import Contact from './Contact';
import About from './About';
import Footer from '../../common/Footer';
import circle from '../../../img/circle.svg';

import useInterserctionOberver from '../../../hooks/useIntersectionObserver';

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
    root: navRef?.current,
    rootMargin: '0px 0px 0px 0px',
    threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7],
  };

  const [presRef, presEntry] = useInterserctionOberver(observerOptions);
  const [presVis, setPresVis] = React.useState(presEntry);
  console.log(presEntry);
  console.log(navRef);
  return (
    <article
      id="portfolio-root"
      className="[ main-grid bg-circle ]"
      style={{
        backgroundImage: `url(${circle})`,
      }}
    >
      <MainNav navRef={navRef} />
      <Presentation presRef={presRef} />
      <WorkOverview />
      <About />
      <Contact />
      <Footer />
    </article>
  );
};

export default Root;
