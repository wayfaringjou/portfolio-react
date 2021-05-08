import { mdiServer, mdiXml } from '@mdi/js';
import Icon from '@mdi/react';
import React, { ReactElement, useEffect, useState } from 'react';
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
      <section className="[ work-overview pad-s1-all bg-neutral-900 text-neutral-100 ]">
        <header className="[ section-header ]">
          <h2>Work</h2>
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
                        <span className="tech-pill">{item.topic.name}</span>
                      ))}
                      {[...node.languages.nodes].map((item) => (
                        <span className="tech-pill">{item.name}</span>
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
      <section className="[ skills-overview bg-variant-100 ]">
        <section className="[ box stack ]">
          <header>
            <div className="[ icon-bg circle bg-variant-500 ]">
              <Icon path={mdiXml} />
            </div>
            <h3>Front-end Developer</h3>
          </header>
          <p>Languages I speak</p>
          <p>Tools I Use</p>
        </section>
        <section className="[ box stack ]">
          <header>
            <div className="[ icon-bg circle bg-variant-500 ]">
              <Icon path={mdiServer} />
            </div>
            <h3>Back-end Developer</h3>
          </header>
          <p>Languages</p>
          <p>Tools</p>
        </section>
      </section>
    </>
  );
};

export default WorkOverview;
