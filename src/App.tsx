import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Root from './components/views/Root';

const App = (): React.ReactElement => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={Root} />
    </Switch>
  </div>
);

export default App;
