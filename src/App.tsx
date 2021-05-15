import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Root from './components/views/Root';
import SectionObserverProvider, {
  ObserverContext,
} from './context/sectionObservers';

const App = (): React.ReactElement => {
  const context = React.useContext(ObserverContext);
  const [active, setActive] = React.useState<string | null | undefined>(null);
  React.useEffect(() => {
    console.log('redraw');
  }, [context]);
  console.log(context?.entries);
  if (context?.entries) {
    console.log(context.entries);
    setActive(
      Object.keys(context.entries).find((entry) => {
        console.log(context.entries[entry]?.isIntersecting);
        return context.entries[entry]?.isIntersecting === true;
      }),
    );
  }
  console.log(active);
  return (
    <div className="App bg-neutral-100">
      <SectionObserverProvider>
        <Switch>
          <Route exact path="/" component={Root} />
        </Switch>
      </SectionObserverProvider>
    </div>
  );
};
export default App;
