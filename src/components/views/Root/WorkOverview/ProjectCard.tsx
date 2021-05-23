import * as React from 'react';

type ProjectCardProps = {
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
};

const ProjectCard = ({ node }: ProjectCardProps): React.ReactElement => {
  const {
    name, description, url, languages, repositoryTopics,
  } = node;
  return (
    <article key={name} className="project-card">
      <figure>
        <img alt={name} src={`${url}/raw/main/screens/portfolio.png`} />
        <figcaption>
          <header>
            <h3>{name}</h3>
          </header>
          <p>{description}</p>
          <section className="tech-stack">
            <div className="int-wrapper">
              {[...repositoryTopics.nodes].map((item) => (
                <span key={item.topic.name} className="tech-pill">
                  {item.topic.name}
                </span>
              ))}
              {[...languages.nodes].map((item) => (
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
  );
};

export default ProjectCard;
