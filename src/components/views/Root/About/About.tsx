import * as React from 'react';
import { ObserverContext } from '../../../../context/sectionObservers';

const About = (): React.ReactElement => {
  const context = React.useContext(ObserverContext);
  return (
    <>
      <section ref={context?.refs.aboutRef} className="[ about pad-s1-all ]">
        <header className="[ section-header ]">
          <h2>About</h2>
        </header>
      </section>
      <section className="[ ]">
        <h2>When Im not coding...</h2>
      </section>
    </>
  );
};

export default About;
