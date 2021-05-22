import * as React from 'react';
import { ObserverContext } from '../../../../context/sectionObservers';
import beach from '../../../../img/beach.png';
import guitar from '../../../../img/guitar.png';
import yunque from '../../../../img/yunque.png';
import bike from '../../../../img/bike.png';
import interests from '../../../../img/interests.png';
import interestsA from '../../../../img/interests-a.png';
import interestsB from '../../../../img/interests-b.png';
import interests1 from '../../../../img/interests1.png';
import interests2 from '../../../../img/interests2.png';
import interests3 from '../../../../img/interests3.png';
import interests4 from '../../../../img/interests4.png';
import interests5 from '../../../../img/interests5.png';
import interests6 from '../../../../img/interests6.png';

const About = (): React.ReactElement => {
  const context = React.useContext(ObserverContext);
  return (
    <>
      <section ref={context?.refs.aboutRef} className="[ about ]">
        <header className="[ section-header ]">
          <h2>About</h2>
        </header>
        <section className="[ bio ]">
          <div className="[ clip-path ]">
            <div className="[ clip-path-content text-neutral-900 stack ]">
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
      <section
        ref={context?.refs.interestsRef}
        className="[ about-more stack ]"
      >
        <header className="[ subsection-header ]">
          <h3>A bit more about me...</h3>
        </header>
        <section className="[ interests ] [ stack ]">
          {/* <div className="[ interests-images ]">
              <img alt="Pine grove beach in Carolina, Puerto Rico" src={beach} />
              <img alt="My guitar" src={guitar} />
              <img alt="My bike" src={bike} />
              <img alt="Juan Diego fall in El Yunque" src={yunque} />
            </div> */}

          <section className="[ interests-description ][ box margin-s1-all ]">
            <img alt="my-interests" src={interests1} />
            <img alt="my-interests" src={interests2} />

            <div className="[ description-text ][ stack box bg-neutral-100 ]">
              <header>
                <h4>Interests</h4>
              </header>
              <p>
                I often find inspiration in nature. I love hiking and going to
                the beach. I also enjoy going for a ride on my bike and playing
                guitar.
              </p>
            </div>
            <img alt="my-interests" src={interests3} />
            <img alt="my-interests" src={interests4} />
            <img alt="my-interests" src={interests5} />
            <img alt="my-interests" src={interests6} />
          </section>
        </section>
      </section>
      <section className="[ testimonial stack ]">
        <header>
          <h4>Testimonial</h4>
        </header>
        <section className="[ testimonial-text box stack ]">
          <p>
            <em>
              &quot;I highly recommend Joel to any employer. In addition to his
              excellent core skill set he has a desire for continuous
              improvement, and an interest in how to achieve software quality
              and develop efficiently. These attributes will serve him well as a
              junior developer and enable him to grow into a more experienced
              and senior developer quickly.&quot;
            </em>
          </p>
          <p className="[ overline ]">
            —Valerie Beattie, mentor for the Engineering Flex software
            development course at Thinkful
          </p>
        </section>
      </section>
    </>
  );
};

export default About;
