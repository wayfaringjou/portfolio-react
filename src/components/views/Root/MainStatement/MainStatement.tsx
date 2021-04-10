import React, { ReactElement, ReactNode } from 'react';

const MainStatement = ({ children }: { children: ReactNode }): ReactElement => (
  <h1>{children}</h1>
);

export default MainStatement;
