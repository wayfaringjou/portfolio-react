/* eslint-disable max-len */
import React, { ReactElement, useEffect, useState } from 'react';
import fetchGraphQL from '../../../../utils/fetchGraphQL';
// import backdrop from '../../../../img/layered-schema/backdrop.svg';
// import layout from '../../../../img/layered-schema/layout.svg';
// import content from '../../../../img/layered-schema/content.svg';

import background from '../../../../img/illustration/1_Background.svg';
import backgroundOutline from '../../../../img/illustration/2_Background - outline.svg';
import layout from '../../../../img/illustration/3_Layout.svg';
import layoutOutline from '../../../../img/illustration/4_Layout - outline.svg';
import content from '../../../../img/illustration/5_content.svg';
import contentOutline from '../../../../img/illustration/6_content - outline.svg';

/*
{
  "greeting": "Hi, I'm Joel.",
  "intro": "I work with Javascript, React, Node.js, and other modern web development frameworks to create robust and functional web applications.",
  "techIntro": "I'm a software engineer specialized in Javascript, React, Node.js and other modern web development frameworks.",
  "characteristic": "I create web applications.",
  "invitation": "Let's build something together."
}
*/

const Presentation = (): ReactElement => {
  const [intro, setIntro] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    fetchGraphQL(`
      query bio {
        viewer {
          bio
          }
        }
    `)
      .then((response) => {
        if (!isMounted) {
          // eslint-disable-next-line no-useless-return
          return;
        }
        const { data } = response;
        setIntro(data?.viewer?.bio);
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      isMounted = false;
    };
  }, [fetchGraphQL]);

  return (
    <>
      <section className="cover bg-2">
        <div className="with-adjacent centered">
          <div className="exploded">
            <img src={background} alt="img" />
            <img src={backgroundOutline} alt="img" />
            <img src={layout} alt="img" />
            <img src={layoutOutline} alt="img" />
            <img src={content} alt="img" />
            <img src={contentOutline} alt="img" />
          </div>
          <div className="">
            <h1 className="">Let&apos;s build something great together!</h1>
            <p>Lorem ipsum</p>
            <button type="button">hire me</button>
          </div>
        </div>
      </section>

      <section className="">
        <>
          <div>
            <h2>
              <span>Hi! I&apos;m Joel,</span>
            </h2>
            <h3>
              <span>{intro}</span>
            </h3>
            {/*
          <button type="button">Let&apos;s work together</button>
        */}
          </div>
        </>
      </section>
    </>
  );
};

export default Presentation;
