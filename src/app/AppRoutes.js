import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));

const Buttons = lazy(() => import('./basic-ui/Buttons'));
const Dropdowns = lazy(() => import('./basic-ui/Dropdowns'));
const Typography = lazy(() => import('./basic-ui/Typography'));

const BasicElements = lazy(() => import('./form-elements/BasicElements'));

const BasicTable = lazy(() => import('./tables/BasicTable'));

const FontAwesome = lazy(() => import('./icons/FontAwesome'));


const ChartJs = lazy(() => import('./charts/ChartJs'));

const Error404 = lazy(() => import('./user-pages/Error404'));
const Error500 = lazy(() => import('./user-pages/Error500'));

const Login = lazy(() => import('./user-pages/Login'));
const Register1 = lazy(() => import('./user-pages/Register'));

const BlankPage = lazy(() => import('./user-pages/BlankPage'));

const users = lazy(() => import('./users/index'));
const users_add = lazy(() => import('./users/add'));
const tvshows = lazy(() => import('./tvshows/index'));
const tvshows_add = lazy(() => import('./tvshows/add'));
const evaluations = lazy(() => import('./evaluations/index'));
const evaluations_add = lazy(() => import('./evaluations/add'));


class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/dashboard" component={ Dashboard } />

          <Route path="/basic-ui/buttons" component={ Buttons } />
          <Route path="/basic-ui/dropdowns" component={ Dropdowns } />
          <Route path="/basic-ui/typography" component={ Typography } />

          <Route path="/form-Elements/basic-elements" component={ BasicElements } />

          <Route path="/tables/basic-table" component={ BasicTable } />

          <Route path="/icons/font-awesome" component={ FontAwesome } />

          <Route path="/charts/chart-js" component={ ChartJs } />

          <Route path="/usuarios/todos" component={ users } />
          <Route path="/usuarios/novo" component={ users_add } />

          <Route path="/tvshows/index" component={ tvshows } />
          <Route path="/tvshows/novo" component={ tvshows_add } />

          <Route path="/evaluations/index" component={ evaluations } />
          <Route path="/evaluations/novo" component={ evaluations_add } />

          <Route path="/user-pages/login-1" component={ Login } />
          <Route path="/user-pages/register-1" component={ Register1 } />

          <Route path="/user-pages/error-404" component={ Error404 } />
          <Route path="/user-pages/error-500" component={ Error500 } />

          <Route path="/user-pages/blank-page" component={ BlankPage } />


          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;