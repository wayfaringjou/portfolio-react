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
    <>
      <section className="ratio-blocks-wrapper">
        <div className="">
          <h2>
            <span>{/* Hi! I&apos;m Joel, I&apos;m a */}</span>
          </h2>
          <h3>
            <span>{/* intro */}</span>
          </h3>
          {/*
          <button type="button">Let&apos;s work together</button>
           */}
        </div>
      </section>

      <section className="shape-3d">
        <h1 className="text3d">
          {/* Let&apos;s build something great together! */}
        </h1>
      </section>
    </>
  );
};

export default Presentation;
