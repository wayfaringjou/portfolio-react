import React, { ReactElement, ReactNode } from 'react';

const Presentation = ({ children }: { children: ReactNode }): ReactElement => (
  <h1>{children}</h1>
);

export default Presentation;
