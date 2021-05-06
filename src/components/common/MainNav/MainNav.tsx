import React, { ReactElement } from 'react';
import Icon from '@mdi/react';
import { mdiGithub, mdiLinkedin } from '@mdi/js';

const MainNav = (): ReactElement | null => (
  <header className="[ main-nav with-sidebar ]">
    <div className="intermediary-wrapper">
      <nav className="[ navbar cluster ]">
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
      <aside className="[ navbar socials sidebar cluster ]">
        <ul>
          <li>
            <Icon path={mdiLinkedin} />
          </li>
          <li>
            <Icon path={mdiGithub} />
          </li>
        </ul>
      </aside>
    </div>
  </header>
);

export default MainNav;
