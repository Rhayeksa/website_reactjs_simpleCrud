import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./configs/routes";

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route, idr) => (
          <Route
            key={idr}
            path={route.path}
            exact={true}
            render={() => <route.component />}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
