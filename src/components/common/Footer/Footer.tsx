import * as React from 'react';
import sunset from '../../../img/sunset.svg';

const Footer = (): React.ReactElement => (
  <footer className="[ pad-s2-block-start box ]">
    <section>
      <p className="[ caption ]">
        ©2021-present Joel Del Cueto. All Rights Reserved
      </p>
    </section>
    <section className="[ quote ]">
      <div>
        <hr />
        <h4>
          Not all those who wander are lost.
          <br />
          <em className="overline">J.R.R. Tolkien</em>
        </h4>
        <hr />
      </div>
      <img className="margin-s0-inline-start" src={sunset} alt="Abstract Sunset" />
    </section>
  </footer>
);

export default Footer;
