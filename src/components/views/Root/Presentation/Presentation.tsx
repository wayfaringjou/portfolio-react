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

type presentationProps = {
  presRef: React.Dispatch<React.SetStateAction<any>>;
};

const Presentation = ({ presRef }: presentationProps): React.ReactElement => {
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
      <div className="[ container cover margin-s2-block-start ]">
        <section className="[ banner ] [ with-sidebar centered ]">
          <div className="[ with-sidebar-intermediate ]">
            <section className="[ illustration ]" ref={presRef}>
              {/* <div
                style={{ backgroundImage: `url()` }}
                className="[ backdrop ] [ ]"
              /> */}
              <figure className="[ exploded ]">
                <img src={background} alt="img" />
                <img src={backgroundOutline} alt="img" />
                <img src={layout} alt="img" />
                <img src={layoutOutline} alt="img" />
                <img src={content} alt="img" />
                <img src={contentOutline} alt="img" />
              </figure>
            </section>
            <section className="[ invitation content cover ]">
              <div className="[ centered stack ]">
                <h1 className="">Let&apos;s build something great together!</h1>
                <p className="[ ts2 ]">
                  Looking for a web developer for your team? I&apos;d be glad to
                  learn about your project! I&apos;m passionate about
                  programming and have experience working with lots of different
                  people. I like creating human-centered products and looking
                  for creative solutions. Looking forward to hearing from you!
                </p>
                <button type="button" className="[ icon contained ]">
                  <Icon path={mdiChevronRight} />
                  Get in touch
                </button>
              </div>
            </section>
          </div>
        </section>
      </div>
      <section className="[ intro ] [ box stack ]">
        <div className="[ frame margin-s2-block-start wave-decoration ]">
          <img
            className="[ circle ]"
            width="460px"
            height="460px"
            alt="It's Joel"
            src={avatar}
          />
        </div>
        <div className="[ dots-decoration ]">
          <div className="[ box stack shifted ]">
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
