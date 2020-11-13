import React, { lazy } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

/***** Components *****/
// import { Layout } from './components/Layout';

import {Layout, SideMenu } from './components/'

/***** Pages *****/
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
// const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage.js'));

const UseFormattedPage = lazy(() => import('./pages/UseFormattedPage/UseFormattedPage'));
const DragnDropPage = lazy(() => import('./pages/DragnDropPage/DragnDropPage'));
const FormSubmissionPage = lazy(() => import('./pages/FormSubmission/FormSubmission')); 
/*** Utils pages ***/
// const ErrorPage = lazy(() => import('./pages/UtilPages/ErrorPage.js'));

const Root = () =>
    <BrowserRouter basename="/">
        <Switch>
            <Redirect exact from='/' to='/home'/>

            <Route exact path='/home' render={props => <Layout main={<HomePage/>} id="0" pageName="Home" menu={<SideMenu/>} {...props}/>}/>
            <Route exact path='/UseFormatted' render={props => <Layout main={<UseFormattedPage/>} id="1" pageName="UseFormatted" menu={<SideMenu/>} {...props}/>}/>
            <Route exact path='/DragnDrop' render={props => <Layout main={<DragnDropPage/>} id="2" pageName="DragnDrop" menu={<SideMenu/>} {...props}/>}/>
            <Route exact path='/FormSubmission' render={props => <Layout main={<FormSubmissionPage/>} id="3" pageName="FormSubmission" menu={<SideMenu/>} {...props}/>}/>

        </Switch>
    </BrowserRouter>

export default Root;
