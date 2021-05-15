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
  rootMargin: '10px 0px 0px 0px',
  threshold: [0.7],
};

const SectionObserverProvider = ({
  children,
}: SectionObserverProviderProps): React.ReactElement => {
  const [workRef, workEntry] = useInterserctionObserver(sectionObserverOptions);
  const [aboutRef, aboutEntry] = useInterserctionObserver(
    sectionObserverOptions,
  );
  const [contactRef, contactEntry] = useInterserctionObserver(
    sectionObserverOptions,
  );

  const value = {
    refs: { workRef, aboutRef, contactRef },
    entries: { workEntry, aboutEntry, contactEntry },
  };
  console.log(value);
  return (
    <ObserverContext.Provider value={value}>
      {children}
    </ObserverContext.Provider>
  );
};

export default SectionObserverProvider;
