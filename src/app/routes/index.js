import React, {Component,Suspense, lazy} from "react";
import { Switch, Redirect } from 'react-router-dom';
import Spinner from '../shared/Spinner';
import Route from './Route';
import SignIn from '../signin';


const Dashboard = lazy(() => import('../dashboard/Dashboard'));

const Buttons = lazy(() => import('../basic-ui/Buttons'));
const Dropdowns = lazy(() => import('../basic-ui/Dropdowns'));
const Typography = lazy(() => import('../basic-ui/Typography'));

const BasicElements = lazy(() => import('../form-elements/BasicElements'));

const BasicTable = lazy(() => import('../tables/BasicTable'));

const FontAwesome = lazy(() => import('../icons/FontAwesome'));


const ChartJs = lazy(() => import('../charts/ChartJs'));

const Error404 = lazy(() => import('../user-pages/Error404'));
const Error500 = lazy(() => import('../user-pages/Error500'));

const Login = lazy(() => import('../user-pages/Login'));
const Register1 = lazy(() => import('../user-pages/Register'));

const BlankPage = lazy(() => import('../user-pages/BlankPage'));

const users = lazy(() => import('../users/index'));
const users_add = lazy(() => import('../users/add'));
const tvshows = lazy(() => import('../tvshows/index'));
const tvshows_add = lazy(() => import('../tvshows/add'));
const evaluations = lazy(() => import('../evaluations/index'));
const evaluations_add = lazy(() => import('../evaluations/add'));
const evaluation_view = lazy(() => import('../evaluations/view'));
const comments = lazy(() => import('../comments/index'));

export default function Routes() {
    return (
        <Suspense fallback={<Spinner/>}>
        <Switch>
            <Route exact path="/" component={ SignIn } />
            <Route path="/user-pages/register-1" component={ Register1 } />

            <Route path="/dashboard" component={ Dashboard } isPrivate />

            <Route path="/basic-ui/buttons" component={ Buttons } isPrivate/>
            <Route path="/basic-ui/dropdowns" component={ Dropdowns } isPrivate/>
            <Route path="/basic-ui/typography" component={ Typography } isPrivate/>

            <Route path="/form-Elements/basic-elements" component={ BasicElements } isPrivate/>

            <Route path="/tables/basic-table" component={ BasicTable } isPrivate/>

            <Route path="/icons/font-awesome" component={ FontAwesome } isPrivate/>

            <Route path="/charts/chart-js" component={ ChartJs } isPrivate/>

            <Route path="/usuarios/todos" component={ users } isPrivate/>
            <Route path="/usuarios/novo" component={ users_add } isPrivate/>

            <Route path="/tvshows/index" component={ tvshows } isPrivate/>
            <Route path="/tvshows/novo" component={ tvshows_add } isPrivate/>

            <Route path="/comments/index" component={ comments } isPrivate/>

            <Route path="/evaluations/index" component={ evaluations } isPrivate/>
            <Route path="/evaluations/novo" component={ evaluations_add } isPrivate/>
            <Route path="/evaluations/view/" component={ evaluation_view } isPrivate/>


            <Route path="/user-pages/error-404" component={ Error404 }/>
            <Route path="/user-pages/error-500" component={ Error500 }/>

            <Route path="/user-pages/blank-page" component={ BlankPage }/>
        </Switch>
        </Suspense>
    );
};
