/* eslint-disable max-len */
import * as React from 'react';

import Icon from '@mdi/react';
import { mdiChevronRight, mdiFileAccount } from '@mdi/js';
import fetchGraphQL from '../../../../utils/fetchGraphQL';

import {
  background,
  backgroundOutline,
  layout,
  layoutOutline,
  content,
  contentOutline,
} from '../../../../img/illustration';

import dots from '../../../../img/dots.svg';

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
      <section className="[ banner ] [ box with-sidebar margin-s2-block-start ]">
        <div className="[ with-sidebar-intermediate ]">
          <section className="[ illustration ]">
            <div
              style={{ backgroundImage: `url(${dots})` }}
              className="[ backdrop ] [ ]"
            />
            <figure className="exploded">
              <img src={background} alt="img" />
              <img src={backgroundOutline} alt="img" />
              <img src={layout} alt="img" />
              <img src={layoutOutline} alt="img" />
              <img src={content} alt="img" />
              <img src={contentOutline} alt="img" />
            </figure>
          </section>
          <section className="[ invitation stack sidebar ]">
            <h1 className="">Let&apos;s build something great together!</h1>
            <p>
              Looking for a web developer for your team? I&apos;d be glad to
              learn about your project! I&apos;m passionate about programming
              and have experience working with lots of different people. I like
              creating human-centered products and looking for creative
              solutions. Looking forward to hearing from you!
            </p>
            <button type="button" className="[ icon contained  ]">
              <Icon path={mdiChevronRight} />
              Get in touch
            </button>
          </section>
        </div>
      </section>

      <section className="[ intro ] [ box stack bg-primary-900 ]">
        <div className="[ frame margin-s2-block-start ]">
          <img
            className="[ circle ]"
            alt="It's Joel"
            src={avatar}
          />
        </div>
        <div className="[ dots-decoration light ]">
          <div className="[ box stack text-neutral-900 shadow-primary-400 bg-primary-100 ]">
            <h2 className="[ card-title ]">Hi! I&apos;m Joel,</h2>
            <p className="[ card-caption ]">{intro}</p>
            <button type="button" className="[ icon contained ]">
              <Icon path={mdiFileAccount} />
              My resume
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Presentation;
