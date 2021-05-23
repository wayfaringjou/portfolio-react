import * as React from 'react';
import SkillCard from './SkillCard';
import { ObserverContext } from '../../../../context/sectionObservers';
import { fetchPinnedRepos } from '../../../../utils/fetchGraphQL';
import skillset from './skillset';
import ProjectCard from './ProjectCard';

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
          {projects?.map((project) => (
            <ProjectCard node={project.node} />
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
