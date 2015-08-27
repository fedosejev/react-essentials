var React = require('react');
var ReactDOM = require('react-dom');

var ReactClass = React.createClass({
  render: function () {
    return React.createElement('h1', { className: 'header' }, 'React Component');
  } 
});

var reactComponentElement = React.createElement(ReactClass);
var reactComponent = ReactDOM.render(reactComponentElement, document.getElementById('react-application'));