import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Root from './components/views/Root';
import { ObserverContext } from './context/sectionObservers';

const App = (): React.ReactElement => {
  const context = React.useContext(ObserverContext);
  let activeSection: string | undefined = 'default';
  const sectionBackgrounds: { [key: string]: string } = {
    default: 'bg-neutal-100',
    workEntry: 'bg-neutral-500',
    aboutEntry: 'bg-neutral-600',
    contactEntry: 'bg-neutral-800',
  };

  if (context?.entries) {
    console.log(context.entries);
    console.log(
      Object.keys(context.entries).find(
        (entry) => context.entries[entry]?.isIntersecting === true,
      ),
    );
    activeSection = Object.keys(context.entries).find(
      (entry) => context.entries[entry]?.isIntersecting === true,
    );
    console.log(activeSection);
    if (!activeSection) activeSection = 'default';
  }

  return (
    <div className={`App ${sectionBackgrounds[activeSection]}`}>
      <Switch>
        <Route exact path="/" component={Root} />
      </Switch>
    </div>
  );
};
export default App;
