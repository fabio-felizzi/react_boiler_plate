import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routeSettings from 'Enum/routeSettingsEnum';

import DynamicImportUtil from 'Utils/dynamicImportUtil';
import StyledApp from 'StyledComponents/StyledApp';

const appRoutes = Object.values(routeSettings);

const App = () => (
  <StyledApp className="grid-container">
    <div className="body">
      <Router>
        <Route render={({ location }) => (
          <Switch key={location.key} location={location}>
            {appRoutes.map(({ path, RouteComponent }) => (
              <Route
                exact
                key={path}
                path={path}
                render={() => <DynamicImportUtil path={RouteComponent} />}
              />
            ))}
          </Switch>
        )}
        />
      </Router>
    </div>
  </StyledApp>
);

export default App;
