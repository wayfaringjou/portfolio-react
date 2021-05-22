import * as React from 'react';
import SkillCard from './SkillCard';
import { ObserverContext } from '../../../../context/sectionObservers';
import { fetchPinnedRepos } from '../../../../utils/fetchGraphQL';
import skillset from './skillset';

const skillKeys = Object.keys(skillset) as Array<keyof typeof skillset>;

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

const WorkOverview = (): React.ReactElement => {
  const [projects, setProjects] = React.useState<projectProps | null>(null);
  const context = React.useContext(ObserverContext);
  React.useEffect(() => {
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
        </header>
        <section className="[ card-grid ]">
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
        <div className="[ skills-cards box ]">
          <div>
            {skillKeys.map((key) => (
              <SkillCard key={key} skill={skillset[key]} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkOverview;
