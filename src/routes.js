import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import DefaultLayout from './pages/_layouts/default';

import Main from './pages/Main';
import Orcamento from './pages/Orcamento';
import AntEx from './pages/AntEx';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => (
            <DefaultLayout>
              <Main />
            </DefaultLayout>
          )}
        />
        <Route
          path="/orcamento"
          render={(props) => (
            <DefaultLayout>
              <Orcamento />
            </DefaultLayout>
          )}
        />
        <Route path="/exemplo" component={AntEx} />
      </Switch>
    </BrowserRouter>
  );
}
