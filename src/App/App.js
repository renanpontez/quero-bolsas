/* eslint-disable import/no-named-as-default */
import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import HomeContainer from "../components/home/HomeContainer";
import PropTypes from "prop-types";
import { hot } from "react-hot-loader";

class App extends React.Component {
  render() {
    const activeStyle = { color: 'blue' };
    return (
      <div>
        <div>
          <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          {/* <Route component={NotFoundPage} /> */}
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);