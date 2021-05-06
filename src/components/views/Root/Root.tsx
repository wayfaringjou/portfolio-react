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

const Root = (): React.ReactElement => {
  // const containerRef = React.useRef<React.ReactNode>(null);
  const [setNode, entry] = useIntersectionOberver(observerOptions);
  /*
  React.useEffect(() => {
    const observer = new IntersectionObserver(testCallback, observerOptions);
    const target =
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.disconnect();
    };
  }, [containerRef]);
*/

  return (
    <article id="portfolio-root" className="main-grid">
      <Presentation />
      <MainNav />
      <div ref={setNode} />
      <WorkOverview />
      <About />
      <Contact />
    </article>
  );
};

export default Root;
