import { useState, useEffect } from 'react';

const useMediaQuery = (query: string): boolean | null => {
  const [matches, setMatches] = useState<boolean | null>(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = (): void => {
      console.log(media.matches);
      setMatches(media.matches);
    };

    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
