import {
  mdiGithub, mdiGmail, mdiLinkedin, mdiTwitter,
} from '@mdi/js';
import Icon from '@mdi/react';
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
        <form className="[ box ]">
          <fieldset className="[ stack ]">
            <legend>
              <h3>Leave a message:</h3>
            </legend>
            <label htmlFor="name">
              <p>Name:</p>
              <input
                type="text"
                id="name"
                placeholder="Your name or your business name"
              />
            </label>
            <label htmlFor="email">
              <p>Email:</p>
              <input
                type="text"
                id="email"
                placeholder="Your name or your business name"
              />
            </label>
            <label htmlFor="subject">
              <p>Subject:</p>
              <input type="text" id="subject" placeholder="Your business" />
            </label>
            <label htmlFor="message">
              <p>Message:</p>
              <textarea id="message" placeholder="Your message" />
            </label>
            <button className="[ contained ]" type="submit">Submit</button>
          </fieldset>
        </form>
      </section>
      <section
        ref={context?.refs.socialsRef}
        className="[ socials ]"
      >
        <header className="[ subsection-header ]">
          <h3>Socials</h3>
        </header>
        <section className="[ socials-links ]">
          <Icon path={mdiGithub} />
          <Icon path={mdiLinkedin} />
          <Icon path={mdiTwitter} />
          <Icon path={mdiGmail} />
        </section>
      </section>
    </>
  );
};

export default Contact;
