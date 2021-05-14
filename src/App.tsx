import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Root from './components/views/Root';
import useInterserctionObserver from './hooks/useIntersectionObserver';

const sectionObserverOptions = {
  root: null,
  rootMargin: '-10px 0px 0px 0px',
  threshold: 1,
};

const App = (): React.ReactElement => {
  const [workRef, workEntry] = useInterserctionObserver(sectionObserverOptions);
  const [aboutRef, aboutEntry] = useInterserctionObserver(
    sectionObserverOptions,
  );
  const [contactRef, contactEntry] = useInterserctionObserver(
    sectionObserverOptions,
  );

  return (
    <div className="App bg-neutral-100">
      <Switch>
        <Route exact path="/" component={Root} />
      </Switch>
    </div>
  );
};

export default App;
