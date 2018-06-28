import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import routes from './routes';
import * as actions from '../../actions';

class App extends Component {
  renderRoutes = () => {
    return routes.map(route => {
      return <Route key={route.title} {...route} />;
    });
  };

  render() {
    return (
      <Router>
        <div>
          <Helmet titleTemplate={`%s - NAME`} />
          <Switch>{this.renderRoutes()}</Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state = {}) => {
  const { navCollapsed } = state.display;
  return {
    navCollapsed
  };
};

export default connect(
  mapStateToProps,
  actions
)(App);
