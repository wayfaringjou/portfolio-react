import React, { ReactElement } from 'react';

const MainNav = (): ReactElement | null => (
  <>
    <nav className="navbar sticky bg-3">
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
    <aside className="navbar socials sticky bg-4">
      <ul>
        <li>LinkedIn</li>
        <li>Github</li>
        <li>email</li>
      </ul>
    </aside>
  </>
);

export default MainNav;
