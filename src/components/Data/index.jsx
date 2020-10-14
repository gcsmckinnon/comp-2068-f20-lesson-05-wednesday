import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LocalData from './LocalData';
import RemoteData from './RemoteData';

const Data = () => {
  return (
    <Switch>
      <Route exact path="/local-data">
        <LocalData/>
      </Route>

      <Route exact path="/remote-data">
        <RemoteData/>
      </Route>
    </Switch>
  );
}
 
export default Data;