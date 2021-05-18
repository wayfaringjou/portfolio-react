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
  const activeShade = 'bg-neutral-100';
  /*
  if (context?.entries) {
    // console.log(context.entries);
    console.log(`work: ${context.entries.workEntry?.intersectionRatio}`);
    console.log(`skills: ${context.entries.skillsEntry?.intersectionRatio}`);
    console.log(`about: ${context.entries.aboutEntry?.intersectionRatio}`);
    console.log(
      `interests: ${context.entries.interestsEntry?.intersectionRatio}`,
    );
    console.log(`contact: ${context.entries.contactEntry?.intersectionRatio}`);

    const { workEntry, skillsEntry } = context.entries;
    if (workEntry && skillsEntry) {
      if (workEntry.isIntersecting || skillsEntry.isIntersecting) {
        if (workEntry.intersectionRatio >= 0.5) {
          activeShade = 'bg-neutral-100';
        }
        if (workEntry.intersectionRatio >= 0.75) {
          activeShade = 'bg-neutral-200';
        }
        if (skillsEntry?.isIntersecting) {
          if (workEntry.intersectionRatio !== skillsEntry.intersectionRatio) {
            if (skillsEntry.intersectionRatio >= 0.15) {
              activeShade = 'bg-neutral-300';
            }
            if (skillsEntry.intersectionRatio >= 0.5) {
              activeShade = 'bg-neutral-400';
            }
          }
        }
      }
    }

    const { aboutEntry, interestsEntry } = context.entries;
    if (aboutEntry && interestsEntry) {
      if (aboutEntry.isIntersecting || interestsEntry.isIntersecting) {
        if (aboutEntry.intersectionRatio >= 0.20) {
          activeShade = 'bg-neutral-500';
        }
        if (aboutEntry.intersectionRatio >= 0.75) {
          activeShade = 'bg-neutral-600 text-neutral-100';
        }
        if (interestsEntry?.isIntersecting) {
          if (
            aboutEntry.intersectionRatio !== interestsEntry.intersectionRatio
          ) {
            if (interestsEntry.intersectionRatio >= 0.15) {
              activeShade = 'bg-neutral-700 text-neutral-100';
            }
            if (interestsEntry.intersectionRatio >= 0.5) {
              activeShade = 'bg-neutral-800 text-neutral-100';
            }
          }
        }
      }
    }
  }
  */
  return (
    <div className={`[ App ] [ ${activeShade} background-fade ]`}>
      <Switch>
        <Route exact path="/" component={Root} />
      </Switch>
    </div>
  );
};
export default App;
