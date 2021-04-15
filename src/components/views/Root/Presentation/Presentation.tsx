import React, { ReactElement, ReactNode } from 'react';
import {
  greeting,
  intro,
  characteristic,
  invitation,
} from '../../../../data/presentation.json';

const Presentation = (): ReactElement => (
  <section>
    <h1>
      <span>{greeting}</span>
      <span>{intro}</span>
    </h1>
    <button type="button">{invitation}</button>
  </section>
);

export default Presentation;
