import * as React from 'react';
import { ObserverContext } from '../../../../context/sectionObservers';
import beach from '../../../../img/beach.png';
import guitar from '../../../../img/guitar.png';
import yunque from '../../../../img/yunque.png';
import bike from '../../../../img/bike.png';

const About = (): React.ReactElement => {
  const context = React.useContext(ObserverContext);
  return (
    <>
      <section ref={context?.refs.aboutRef} className="[ about ]">
        <header className="[ section-header ]">
          <h2>About</h2>
        </header>
        <section className="[ bio ]">
          <div className="[ diagonal-box ]">
            <div className="[ diagonal-box-content text-neutral-900 stack ]">
              <p>
                From 2011 to 2020 I worked as a priest in several communities in
                Madrid and Puerto Rico. This job has given me the chance to know
                and work closely with many people towards the betterment of
                personal and social struggles. These experiences have impressed
                upon me the importance of pursuing what you love and being
                truthful to yourself. I like to work on projects that foster
                community development, promote education and opportunities for
                people, or provide beneficial services.
              </p>
              <p>
                I&apos;ve always had a passion for technology and have been
                learning web development and computer science through the years
                by building personal projects or solutions for my work in
                ministry. I also received formal education in Web Development in
                Thinkful&apos;s Software Engineering Program where I studied
                best practices and modern practical web development standards
                using HTML, CSS, Javascript, jQuery, React, NodeJS, and
                PostgreSQL and fundamental knowledge of data structures and
                algorithms.
              </p>
              <p>
                I feel that my background and my technical skills make for a
                great combination. I&apos;m looking forward to working with
                other developers on interesting new projects. I hope to keep
                constantly growing and learning as a person and as a programmer.
              </p>
            </div>
          </div>
        </section>
      </section>
      <section ref={context?.refs.interestsRef} className="[ interests ]">
        <header>
          <h2>When Im not coding...</h2>
        </header>
        <section>
          <h4>Interests</h4>
          <img alt="Pine grove beach in Carolina, Puerto Rico" src={beach} />
          <p>The beach is a great source of inspiration.</p>
          <img alt="My guitar" src={guitar} />
          <p>I&apos;m learning to play the guitar.</p>
          <img alt="My bike" src={bike} />
          <p>I love going for a ride in my bike.</p>
          <img alt="Juan Diego fall in El Yunque" src={yunque} />
          <p>I love hiking</p>

          <h3>A quote I&apos;ve been having in my mind</h3>
          <p>
            Not all those who wander are lost.
            <em>J.R.R. Tolkien</em>
          </p>
        </section>
      </section>
    </>
  );
};

export default About;
