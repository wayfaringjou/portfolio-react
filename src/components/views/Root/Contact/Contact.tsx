import * as React from 'react';
import { ObserverContext } from '../../../../context/sectionObservers';

const Contact = (): React.ReactElement => {
  const context = React.useContext(ObserverContext);

  return (
    <>
      <section
        ref={context?.refs.contactRef}
        id="contact"
        className="[ contact ]"
      >
        <header className="[ section-header ]">
          <h2>Contact</h2>
        </header>
        <form>
          <fieldset>
            <legend>Contact Form</legend>
            <label htmlFor="name">
              Name:
              <input
                type="text"
                id="name"
                placeholder="Your name or your business name"
              />
            </label>
            <label htmlFor="email">
              email:
              <input
                type="text"
                id="email"
                placeholder="Your name or your business name"
              />
            </label>
            <label htmlFor="subject">
              subject:
              <input type="text" id="subject" placeholder="Your business" />
            </label>
            <label htmlFor="message">
              Name:
              <textarea id="message" placeholder="Your message" />
            </label>
            <button type="submit">Submit</button>
          </fieldset>
        </form>
      </section>
      <section className="[ pad-s1-inline-start ]">
        <header className="[ subsection-header ]">
          <h3>General Contact info</h3>
        </header>
      </section>
    </>
  );
};

export default Contact;
