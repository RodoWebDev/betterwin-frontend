import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Download from '../pages/download';
import Home from '../pages/home';

export const PublicRoutes = () => {
  return (
    <Switch>
      <Route exact path='/' component={ Home }/>
      <Route exact path='/download' component={ Download }/>
      <Route render={ () => <Redirect to='/' /> }/>
    </Switch>
  )
}
