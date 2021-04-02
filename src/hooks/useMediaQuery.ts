import { useState, useEffect } from 'react';

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState<boolean | null>(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.mathces);
    }

    const listener = () => {
      setMatches(media.matches);
    };

    media.addEventListener<'change'>(listener);

    return () => media.removeEventListener(listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
