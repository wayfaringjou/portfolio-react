import * as React from 'react';
import sunset from '../../../img/sunset.svg';

const Footer = (): React.ReactElement => (
  <footer className="[ box ]">
    <section className="[ quote ]">
      <hr />
      <h4>
        Not all those who wander are lost.
        <br />
        <em className="overline">J.R.R. Tolkien</em>
      </h4>
      <hr />
    </section>
    <section>
      <img src={sunset} alt="Abstract Sunset" />
    </section>
    <section>
      <p>© Joel Del Cueto 2021</p>
    </section>
  </footer>
);

export default Footer;
