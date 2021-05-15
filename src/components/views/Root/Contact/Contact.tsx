import * as React from 'react';
import { ObserverContext } from '../../../../context/sectionObservers';

const Contact = (): React.ReactElement => {
  const context = React.useContext(ObserverContext);

  return (
    <>
      <section
        ref={context?.refs.contactRef}
        id="contact"
        className="[ pad-s1-all ]"
      >
        <header className="[ section-header ]">
          <h2>Contact</h2>
        </header>
      </section>
      <section>
        <header>
          <h2>Form</h2>
        </header>
      </section>
    </>
  );
};

export default Contact;
