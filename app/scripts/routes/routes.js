var _ = require('underscore');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('backbone-react-component');

var HomePageComponent = require('./../components/homepage.jsx');
var TapeComponent = require('./../components/tape.jsx');
var BulkComponent = require('./../components/bulk.jsx');
var AssemblyComponent = require('./../components/assembly.jsx');
var CopackagingComponent = require('./../components/copackaging.jsx');
var PlComponent = require('./../components/pl.jsx');
var appContainer = document.getElementById('app');

var Router = Backbone.Router.extend({
  routes:{
    '':'index',
    'tape-rewinders-speedway-packaging-greer-sc':'tape',
    'bulk-plastic-dry-services-speedway-greer-sc':'bulk',
    'assembly-speedway-packaging-distribution-greer-sc':'assembly',
    'copackaging-speedway-packaging-distribution-manufacturing-greer-sc':'copackaging',
    '3pl-speedway-packaging-distribution-manufacturing-greer-sc':'pl'
  },

  index: function(){
    ReactDOM.unmountComponentAtNode(appContainer);

    ReactDOM.render(
      React.createElement(HomePageComponent),
      appContainer
    );
},
  tape: function(){
    ReactDOM.unmountComponentAtNode(appContainer);

    ReactDOM.render(
      React.createElement(TapeComponent),
      appContainer
    );
  },
  bulk: function(){
    ReactDOM.unmountComponentAtNode(appContainer);

    ReactDOM.render(
      React.createElement(BulkComponent),
      appContainer
    );
  },
  assembly: function(){
    ReactDOM.unmountComponentAtNode(appContainer);

    ReactDOM.render(
      React.createElement(AssemblyComponent),
      appContainer
    );
  },
  copackaging: function(){
    ReactDOM.unmountComponentAtNode(appContainer);

    ReactDOM.render(
      React.createElement(CopackagingComponent),
      appContainer
    );
  },
  pl: function(){
    ReactDOM.unmountComponentAtNode(appContainer);

    ReactDOM.render(
      React.createElement(PlComponent),
      appContainer
    );
  },
});

var router = new Router();
module.exports = router;
