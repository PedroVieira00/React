import { Fragment } from "react";

import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  return (
    // Not using div because it's one more level that appears on hte inspect
    // element page but it's doing nothing besides encapsolating in only
    // one return. Not havind div basicly is returning Header, main and any
    // other tag that we add and that isn't possible (obvious there can only
    // be one return).
    // React Fragment resolves the problem of appearing another tag on the
    // inspect tool doing nothing and the problem of not having a encapsulating
    // tag.
    // It can also (in newer projects) be <>...</> instead of Fragment.
    // <div>
    <Fragment>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </Fragment>
    // </div>
  );
}

export default App;
