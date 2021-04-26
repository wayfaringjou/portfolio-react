import React, { ReactElement, useEffect, useState } from 'react';
import { fetchPinnedRepos } from '../../../../utils/fetchGraphQL';

type projectProps = Array<{
  node: {
    name: string;
    description: string;
    homepageUrl: string;
    url: string;
    openGraphImageUrl: string;
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
      <section className="work-overview bg-3">
        <header className="work-overview-header">
          <h2>Work</h2>
        </header>
        <section className="card-grid">
          {projects?.map(({ node }) => (
            <article key={node.name} className="project-card">
              <header>
                <h3>{node.name}</h3>
              </header>
              <figure>
                <img alt={node.name} src={node.openGraphImageUrl} />
                <figcaption>{node.description}</figcaption>
              </figure>
              <button type="button">View Details</button>
            </article>
          ))}
        </section>
      </section>
      <section className="bg-4">
        Skills
      </section>
    </>
  );
};

export default WorkOverview;
