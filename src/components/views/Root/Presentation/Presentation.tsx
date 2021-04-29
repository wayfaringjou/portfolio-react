/* eslint-disable max-len */
import * as React from 'react';

import fetchGraphQL from '../../../../utils/fetchGraphQL';

import {
  background,
  backgroundOutline,
  layout,
  layoutOutline,
  content,
  contentOutline,
} from '../../../../img/illustration';

/*
{
  "greeting": "Hi, I'm Joel.",
  "intro": "I work with Javascript, React, Node.js, and other modern web development frameworks to create robust and functional web applications.",
  "techIntro": "I'm a software engineer specialized in Javascript, React, Node.js and other modern web development frameworks.",
  "characteristic": "I create web applications.",
  "invitation": "Let's build something together."
}
*/

const Presentation = (): React.ReactElement => {
  const [intro, setIntro] = React.useState<string | null>(null);
  const [avatar, setAvatar] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    let isMounted = true;
    fetchGraphQL(`
      query bio {
        viewer {
          bio
          avatarUrl
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
        setAvatar(data?.viewer?.avatarUrl);
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
      <section className="banner">
        <section className="illustration">
          <div className="backdrop" />
          <figure className="exploded">
            <img src={background} alt="img" />
            <img src={backgroundOutline} alt="img" />
            <img src={layout} alt="img" />
            <img src={layoutOutline} alt="img" />
            <img src={content} alt="img" />
            <img src={contentOutline} alt="img" />
          </figure>
          <div className="shape" />
        </section>
        <section className="invitation">
          <h1 className="">Let&apos;s build something great together!</h1>
          <p>Looking for a new member for your team?</p>
          <button type="button">Get in touch</button>
        </section>
      </section>

      <section className="intro">
        <div className="card">
          <img className="circle" alt="It's Joel" src={avatar} />
          <h2 className="card-title">
            Hi! I&apos;m Joel,
          </h2>
          <p className="card-caption">
            {intro}
          </p>
        </div>
      </section>
    </>
  );
};

export default Presentation;
