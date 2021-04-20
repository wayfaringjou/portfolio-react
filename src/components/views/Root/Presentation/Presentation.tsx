import React, { ReactElement, useEffect, useState } from 'react';
import fetchGraphQL from '../../../../utils/fetchGraphQL';

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
    <section>
      <div className="easing-gradient" />
      <h1>
        <span>Hi! I&apos;m Joel, I&apos;m a </span>
        <span>{intro}</span>
      </h1>
      <button type="button">Let&apos;s work together</button>
    </section>
  );
};

export default Presentation;
