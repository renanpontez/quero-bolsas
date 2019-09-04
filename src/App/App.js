/* eslint-disable import/no-named-as-default */
import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import HomeContainer from "../components/home/HomeContainer";
import PropTypes from "prop-types";
import { hot } from "react-hot-loader";
import AppRoute from './AppRoute';
import InternalLayout from '../components/_common/layout/InternalLayout';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {  faInfoCircle, faPlus, faTimes, faSpinner, faChevronDown } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faInfoCircle, faPlus, faTimes, faSpinner, faChevronDown)

class App extends React.Component {
  render() {
    const activeStyle = { color: 'blue' };
    return (
      <>
        <Switch>
          <AppRoute exact path="/" component={HomeContainer} layout={InternalLayout} />
          {/* <Route component={NotFoundPage} /> */}
        </Switch>
      </>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);