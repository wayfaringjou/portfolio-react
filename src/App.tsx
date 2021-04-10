import React, { ReactElement } from 'react';
import { Switch, Route } from 'react-router-dom';
import Root from './components/views/Root';

const App = (): ReactElement | null => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={Root} />
    </Switch>
  </div>
);

export default App;
