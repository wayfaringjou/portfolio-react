import * as React from 'react';

const ProjectCard = (): React.ReactElement => {
  const
  return (
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
  );
};

export default ProjectCard;
