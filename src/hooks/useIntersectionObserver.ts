import * as React from 'react';

const useInterserctionObserver = (
  options: IntersectionObserverInit,
): [
  React.Dispatch<React.SetStateAction<Element | null>>,
  IntersectionObserverEntry | null
] => {
  // State to store observer entry status returned by callback on intersection
  const [entry, setEntry] = React.useState<IntersectionObserverEntry | null>(
    null,
  );
  // State to store dom element node where observer will be attached
  const [node, setNode] = React.useState<Element | null>(null);
  // This ref's current will reference the intersectionObserver constructor
  const observer = React.useRef<null | IntersectionObserver>(null);

  React.useEffect(() => {
    // If there is a reference to an observer, disconnect it
    if (observer.current) observer.current.disconnect();
    // Reconstruct observer using given options
    observer.current = new window.IntersectionObserver(
      ([ent]) => setEntry(ent),
      options,
    );
    // Store observer reference as ref's current
    const { current: currentObserver } = observer;
    // If this redraw has an element node referenced attach observer
    if (node) currentObserver.observe(node);

    // If component is unmounted use this callback to clean
    return () => currentObserver.disconnect();
  }, [node]);

  return [setNode, entry];
};

export default useInterserctionObserver;
