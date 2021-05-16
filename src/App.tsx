/* eslint-disable no-plusplus */
import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Root from './components/views/Root';
import { ObserverContext } from './context/sectionObservers';

/*
const setBackgroundShade = (entries: {
  [key: string]: IntersectionObserverEntry | null;
}): string => {
  let shade = 'bg-neutral-100';
  if (entries.workEntry?.intersectionRatio >= 0.5) {
    shade = 'bg-neutral-200';
  }
  return shade;
};
*/

const App = (): React.ReactElement => {
  const context = React.useContext(ObserverContext);
  let activeSection: string | undefined = 'default';
  let activeShade = 'bg-neutral-100';

  const sectionBackgrounds: { [key: string]: string } = {
    default: 'bg-neutral-100',
    workEntry: 'bg-neutral-500',
    aboutEntry: 'bg-neutral-600',
    contactEntry: 'bg-neutral-800',
  };

  if (context?.entries) {
    // console.log(context.entries);
    console.log(`work: ${context.entries.workEntry?.intersectionRatio}`);
    console.log(`about: ${context.entries.aboutEntry?.intersectionRatio}`);
    console.log(`contact: ${context.entries.contactEntry?.intersectionRatio}`);
    if (context.entries.workEntry) {
      if (context.entries.workEntry?.intersectionRatio >= 0.5) {
        activeShade = 'bg-neutral-200';
      } else if (context.entries.workEntry?.intersectionRatio >= 0.75) {
        activeShade = 'bg-neutral-300';
      }
    }
    /*
    console.log(
      Object.keys(context.entries).find(
        (entry) => context.entries[entry]?.isIntersecting === true,
      ),
    );
    */
    activeSection = Object.keys(context.entries).find(
      (entry) => context.entries[entry]?.isIntersecting === true,
    );
    // console.log(activeSection);
    if (!activeSection) activeSection = 'default';
  }
  return (
    <div className={`App ${activeShade}`}>
      <Switch>
        <Route exact path="/" component={Root} />
      </Switch>
    </div>
  );
};
export default App;
