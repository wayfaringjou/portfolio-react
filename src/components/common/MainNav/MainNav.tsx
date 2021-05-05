import React, { ReactElement } from 'react';

const MainNav = (): ReactElement | null => (
  <>
    <nav className="navbar sticky [ bg-primary-400 ]">
      <ul>
        <li>
          <h2>Work</h2>
        </li>
        <li>
          <h2>About</h2>
        </li>
        <li>
          <h2>Contact</h2>
        </li>
      </ul>
    </nav>
    <aside className="navbar socials sticky [ bg-neutral-100 ]">
      <ul>
        <li>LinkedIn</li>
        <li>Github</li>
        <li>email</li>
      </ul>
    </aside>
  </>
);

export default MainNav;
