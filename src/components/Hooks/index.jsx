import React from 'react';
import { Route, Switch } from 'react-router-dom';

import State from './State';
import Effect from './Effect';
import Ref from './Ref';
import Memo from './Memo';
import Context from './Context';

const Hooks = () => {
  return (
    <Switch>
      <Route exact path="/state">
        <State/>
      </Route>
      
      <Route exact path="/effect">
        <Effect/>
      </Route>

      <Route exact path="/ref">
        <Ref/>
      </Route>

      <Route exact path="/memo">
        <Memo/>
      </Route>

      <Route exact path="/context">
        <Context/>
      </Route>
    </Switch>
  );
}
 
export default Hooks;