import * as React from 'react';
import useInterserctionObserver from '../hooks/useIntersectionObserver';

type ObserverContextTypes = {
  refs: { [key: string]: React.Dispatch<React.SetStateAction<Element | null>> };
  entries: { [key: string]: IntersectionObserverEntry | null };
};

type SectionObserverProviderProps = { children: React.ReactNode };

// this will provide entries for sections observed intersecting with viewport
export const ObserverContext = React.createContext<
  ObserverContextTypes | undefined
>(undefined);

// first lets gather observers
const sectionObserverOptions = {
  root: null,
  rootMargin: '0px',
  threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
};

const SectionObserverProvider = ({
  children,
}: SectionObserverProviderProps): React.ReactElement => {
  const [workRef, workEntry] = useInterserctionObserver(sectionObserverOptions);
  const [skillsRef, skillsEntry] = useInterserctionObserver(
    sectionObserverOptions,
  );
  const [aboutRef, aboutEntry] = useInterserctionObserver(
    sectionObserverOptions,
  );
  const [interestsRef, interestsEntry] = useInterserctionObserver(
    sectionObserverOptions,
  );
  const [contactRef, contactEntry] = useInterserctionObserver(
    sectionObserverOptions,
  );
  const [socialsRef, socialsEntry] = useInterserctionObserver(
    sectionObserverOptions,
  );

  const value = {
    refs: {
      workRef,
      skillsRef,
      aboutRef,
      interestsRef,
      contactRef,
      socialsRef,
    },
    entries: {
      workEntry,
      skillsEntry,
      aboutEntry,
      interestsEntry,
      contactEntry,
      socialsEntry,
    },
  };
  // console.log(value);
  return (
    <ObserverContext.Provider value={value}>
      {children}
    </ObserverContext.Provider>
  );
};

export default SectionObserverProvider;
