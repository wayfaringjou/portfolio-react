import React, { ReactElement, ReactNode } from 'react';

const Presentation = ({
  statement,
}: {
  statement: {
    greeting: string;
    techIntro: string;
    characteristic: string;
    invitation: string;
  };
}): ReactElement => (
  <section>
    <h1>{statement.greeting}</h1>
    <button type="button">{statement.invitation}</button>
  </section>
);

export default Presentation;
