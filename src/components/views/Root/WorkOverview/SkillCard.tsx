import * as React from 'react';
import Icon from '@mdi/react';

type SkillCardProps = {
  skill: {
    area: string;
    icon: string;
    description: string;
    tech: Array<{ icon: string; name: string }>;
  };
};

const SkillCard = ({ skill }: SkillCardProps): React.ReactElement => {
  const {
    area, icon, description, tech,
  } = skill;

  return (
    <section className="[ skill-card ][ box shifted with-sidebar ]">
      <div>
        <header className="[ stack box ]">
          <div className="[ icon-bg circle bg-neutral-800 text-neutral-100 ]">
            <Icon path={icon} />
          </div>
          <h4 className="[ text-neutral-900 ]">{area}</h4>
        </header>
        <section className="[ skill-stack ] [ stack box content ]">
          <p>{description}</p>
          <div className="[ cluster ]">
            <ul>
              {tech.map((t) => (
                <li key={t.name}>
                  <Icon path={t.icon} />
                  {t.name}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </section>
  );
};

export default SkillCard;
