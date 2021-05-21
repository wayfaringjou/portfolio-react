import {
  mdiAws,
  mdiConsole,
  mdiGithub,
  mdiGraphql,
  mdiLanguageCss3,
  mdiLanguageHtml5,
  mdiLanguageJavascript,
  mdiLanguageTypescript,
  mdiMicrosoftVisualStudioCode,
  mdiNodejs,
  mdiReact,
  mdiSass,
  mdiServer,
  mdiTools,
  mdiXml,
} from '@mdi/js';
import Icon from '@mdi/react';
import React, {
  ReactElement, useContext, useEffect, useState,
} from 'react';
import { ObserverContext } from '../../../../context/sectionObservers';
import { fetchPinnedRepos } from '../../../../utils/fetchGraphQL';

type projectProps = Array<{
  node: {
    name: string;
    description: string;
    homepageUrl: string;
    url: string;
    openGraphImageUrl: string;
    languages: {
      nodes: Array<{
        name: string;
      }>;
    };
    repositoryTopics: {
      nodes: Array<{
        topic: {
          name: string;
        };
      }>;
    };
  };
}>;

const WorkOverview = (): ReactElement => {
  const [projects, setProjects] = useState<projectProps | null>(null);
  const context = useContext(ObserverContext);
  useEffect(() => {
    let isMounted = true;
    fetchPinnedRepos(`
      query pinnedRepos {
        viewer {
          pinnedItems(first: 6) {
            edges {
              node {
                ... on Repository {
                  name
                  description
                  homepageUrl
                  url
                  openGraphImageUrl
                  languages(first: 10) {
                    nodes {
                      name
                    }
                  }
                  repositoryTopics(first: 10) {
                    nodes {
                      topic {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `)
      .then((response) => {
        if (!isMounted) {
          // eslint-disable-next-line no-useless-return
          return;
        }
        const { data } = response;
        setProjects(data?.viewer?.pinnedItems?.edges);
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      isMounted = false;
    };
  }, [fetchPinnedRepos]);

  return (
    <>
      <section
        ref={context?.refs.workRef}
        className="[ work-overview text-neutral-900 ]"
      >
        <header className="[ section-header ]">
          <h2>Work</h2>
          <p>{context?.entries.workEntry?.isIntersecting}</p>
        </header>
        <section className="card-grid">
          {projects?.map(({ node }) => (
            <article key={node.name} className="project-card">
              <figure>
                <img
                  alt={node.name}
                  src={`${node.url}/raw/main/screens/portfolio.png`}
                />
                <figcaption>
                  <header>
                    <h3>{node.name}</h3>
                  </header>
                  <p>{node.description}</p>
                  <section className="tech-stack">
                    <div className="int-wrapper">
                      {[...node.repositoryTopics.nodes].map((item) => (
                        <span key={item.topic.name} className="tech-pill">
                          {item.topic.name}
                        </span>
                      ))}
                      {[...node.languages.nodes].map((item) => (
                        <span key={item.name} className="tech-pill">
                          {item.name}
                        </span>
                      ))}
                    </div>
                  </section>
                  <button type="button">View Details</button>
                </figcaption>
                <div className="overlay bg-5" />
              </figure>
            </article>
          ))}
        </section>
      </section>
      <section ref={context?.refs.skillsRef} className="[ skills-overview ]">
        <header className="[ subsection-header ]">
          <h3>Skills</h3>
        </header>
        <div className="[ skills-cards cluster ]">
          <section className="[ skill-card box stack ]">
            <header className="[ stack ]">
              <div className="[ icon-bg circle bg-neutral-800 text-neutral-100 ]">
                <Icon path={mdiXml} />
              </div>
              <h4 className="[ box text-neutral-900 ]">Front-end Developer</h4>
            </header>
            <section className="skill-stack">
              <div className="[ cluster ]">
                <ul>
                  <li>
                    <Icon path={mdiLanguageHtml5} />
                    HTML
                  </li>
                  <li>
                    <Icon path={mdiLanguageCss3} />
                    CSS
                  </li>
                  <li>
                    <Icon path={mdiSass} />
                    Sass
                  </li>
                  <li>
                    <Icon path={mdiLanguageJavascript} />
                    Javascript
                  </li>
                  <li>
                    <Icon path={mdiLanguageTypescript} />
                    Typescript
                  </li>
                  <li>
                    <Icon path={mdiReact} />
                    React
                  </li>
                </ul>
              </div>
            </section>
          </section>
          <section className="[ skill-card box stack ]">
            <header className="[ stack ]">
              <div className="[ icon-bg circle bg-neutral-800 text-neutral-100 ]">
                <Icon path={mdiServer} />
              </div>
              <h4>Back-end Developer</h4>
            </header>
            <section className="skill-stack">
              <div className="[ cluster ]">
                <ul>
                  <li>
                    <Icon path={mdiNodejs} />
                    Node.js
                  </li>
                  <li>Express</li>
                  <li>
                    <Icon path={mdiGraphql} />
                    GraphQL
                  </li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
            </section>
          </section>
          <section className="[ skill-card box stack ]">
            <header className="[ stack ]">
              <div className="[ icon-bg circle bg-neutral-800 text-neutral-100 ]">
                <Icon path={mdiTools} />
              </div>
              <h4>Other Tools</h4>
            </header>
            <section className="skill-stack">
              <div className="[ cluster ]">
                <ul>
                  <li>
                    <Icon path={mdiGithub} />
                    Github
                  </li>
                  <li>
                    <Icon path={mdiConsole} />
                    CLI
                  </li>
                  <li>
                    <Icon path={mdiAws} />
                    AWS
                  </li>
                  <li>
                    <Icon path={mdiMicrosoftVisualStudioCode} />
                    VS Code
                  </li>
                </ul>
              </div>
            </section>
          </section>
        </div>
      </section>
    </>
  );
};

export default WorkOverview;
