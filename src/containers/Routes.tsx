import React, { lazy, Suspense } from "react";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const NotFoundComponent = lazy(() => import("./NotFound/NotFound"));

const Routes = () => (
  <Router>
    <Suspense fallback="Loading...">
      <Switch>
        <Route exact path="/" component={VideoPlayer} />
        <Route exact path="/:activeVideo" component={VideoPlayer} />
        <Route component={NotFoundComponent} />
      </Switch>
    </Suspense>
  </Router>
)

export default Routes;

