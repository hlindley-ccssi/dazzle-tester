var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../main/Main');
var PageContainer = require('../main/PageContainer');
var MyHome = require('../myHome/containers/MyHomeContainer');
var MyData = require('../myData/containers/MyDataContainer')


var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={PageContainer} />
      <Route path="app" >
        <IndexRoute component={MyHome}/>
        <Route path="myData" component={MyData} />
      </Route>
    </Route>
  </Router>
);

module.exports = routes;
