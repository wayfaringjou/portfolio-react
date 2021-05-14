import * as React from 'react';
import useInterserctionObserver from '../hooks/useIntersectionObserver';

// this will provide entries for sections observed intersecting with viewport
export const ObserversContext = React.createContext();

// first lets gather observers
const sectionObserverOptions = {
  root: null,
  rootMargin: '0',
  threshold: 1,
};

const SectionObserverProvider = ({ children }) => {
  const [workRef, workEntry] = useInterserctionObserver(sectionObserverOptions);
  const [aboutRef, aboutEntry] = useInterserctionObserver(
    sectionObserverOptions
  );
  const [contactRef, contactEntry] = useInterserctionObserver(
    sectionObserverOptions
  );

  const value = {
    workRef,
    workEntry,
    aboutRef,
    aboutEntry,
    contactRef,
    contactEntry,
  };

  return (
    <ObserversContext.Provider value={value}>
      {children}
    </ObserversContext.Provider>
  );
};
