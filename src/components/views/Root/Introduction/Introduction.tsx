import * as React from 'react';

import Icon from '@mdi/react';
import { mdiFileAccount } from '@mdi/js';

import fetchGraphQL from '../../../../utils/fetchGraphQL';

const Introduction = (): React.ReactElement => {
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
  }, []);

  return (
    <div className="[ container margin-s4-block-start margin-s4-block-end ]">
      <section className="[ intro ] [ box stack with-sidebar shifted ]">
        <div className="[ with-sidebar-intermediary ]">
          <div className="[ wave-decoration ]">
            <img
              className="[ circle ]"
              width="460px"
              height="460px"
              alt="It's Joel"
              src={avatar}
            />
          </div>
          <div className="[ content ]">
            <div className="[ box stack ]">
              <h2 className="[ card-title ]">Hi! I&apos;m Joel,</h2>
              <p className="[ card-caption ts2 ]">
                {`${intro} You're welcome to browse my projects, 
                learn a bit about me, 
                and how to contact me. You can also grab a copy of my resume:`}
              </p>
              <button type="button" className="[ icon contained ]">
                <Icon path={mdiFileAccount} />
                My resume
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Introduction;
