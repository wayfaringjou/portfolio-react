import * as React from 'react';

const useInterserctionObserver = (
  options: IntersectionObserverInit,
): [
  React.Dispatch<React.SetStateAction<any>>,
  IntersectionObserverEntry | null
] => {
  const [entry, setEntry] = React.useState<IntersectionObserverEntry | null>(
    null,
  );
  const [node, setNode] = React.useState(null);

  const observer = React.useRef<any>(null);

  React.useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new window.IntersectionObserver(
      ([ent]) => setEntry(ent),
      options,
    );

    const { current: currentObserver } = observer;
    console.log(currentObserver);
    if (node) currentObserver.observe(node);

    return () => currentObserver.disconnect();
  }, [node]);

  return [setNode, entry];
};

export default useInterserctionObserver;
