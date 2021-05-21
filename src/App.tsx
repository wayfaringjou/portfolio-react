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
  /*
  let activeShade = 'bg-neutral-100';
  if (context?.entries) {
    // console.log(context.entries);
    console.log(`work: ${context.entries.workEntry?.intersectionRatio}`);
    console.log(`skills: ${context.entries.skillsEntry?.intersectionRatio}`);
    console.log(`about: ${context.entries.aboutEntry?.intersectionRatio}`);
    console.log(
      `interests: ${context.entries.interestsEntry?.intersectionRatio}`,
    );
    console.log(`contact: ${context.entries.contactEntry?.intersectionRatio}`);
    console.log(`socials: ${context.entries.socialsEntry?.intersectionRatio}`);

    const { workEntry, skillsEntry } = context.entries;
    if (workEntry && skillsEntry) {
      if (workEntry.isIntersecting || skillsEntry.isIntersecting) {
        if (workEntry.intersectionRatio >= 0.5) {
          activeShade = 'bg-neutral-100';
        }
        if (workEntry.intersectionRatio >= 0.75) {
          activeShade = 'bg-neutral-100';
        }
        if (skillsEntry?.isIntersecting) {
          if (workEntry.intersectionRatio !== skillsEntry.intersectionRatio) {
            if (skillsEntry.intersectionRatio >= 0.15) {
              activeShade = 'bg-neutral-100';
            }
            if (skillsEntry.intersectionRatio >= 0.5) {
              activeShade = 'bg-neutral-100';
            }
          }
        }
      }
    }

    const { aboutEntry, interestsEntry } = context.entries;
    if (aboutEntry && interestsEntry) {
      if (aboutEntry.isIntersecting || interestsEntry.isIntersecting) {
        if (aboutEntry.intersectionRatio >= 0.2) {
          activeShade = 'bg-neutral-100';
        }
        if (aboutEntry.intersectionRatio >= 0.75) {
          activeShade = 'bg-neutral-100 text-neutral-900';
        }
        if (interestsEntry?.isIntersecting) {
          if (
            aboutEntry.intersectionRatio !== interestsEntry.intersectionRatio
          ) {
            if (interestsEntry.intersectionRatio >= 0.15) {
              activeShade = 'bg-neutral-100 text-neutral-900';
            }
            if (interestsEntry.intersectionRatio >= 0.5) {
              activeShade = 'bg-neutral-100 text-neutral-900';
            }
          }
        }
      }
    }

    const { contactEntry, socialsEntry } = context.entries;
    if (contactEntry && socialsEntry) {
      if (contactEntry.isIntersecting || socialsEntry.isIntersecting) {
        if (contactEntry.intersectionRatio >= 0.2) {
          activeShade = 'bg-neutral-100 text-neutral-900';
        }
        if (contactEntry.intersectionRatio >= 0.75) {
          activeShade = 'bg-neutral-100 text-neutral-900';
        }
        if (socialsEntry?.isIntersecting) {
          if (
            contactEntry.intersectionRatio !== socialsEntry.intersectionRatio
          ) {
            if (socialsEntry.intersectionRatio >= 0.15) {
              activeShade = 'bg-neutral-100 text-neutral-900';
            }
            if (socialsEntry.intersectionRatio >= 0.5) {
              activeShade = 'bg-neutral-100 text-neutral-900';
            }
          }
        }
      }
    }
  }
  */
  return (
    <div className=" [ App ] [ sunset ] ">
      <Switch>
        <Route exact path="/" component={Root} />
      </Switch>
    </div>
  );
};
export default App;
