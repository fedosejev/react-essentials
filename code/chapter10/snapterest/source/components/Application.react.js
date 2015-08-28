var React = require('react');
var Stream = require('./Stream.react');
var Collection = require('./Collection.react');

var Application = React.createClass({
  render: function () {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 text-center">
            <Stream />
          </div>

          <div className="col-md-8">
            <Collection />
          </div>
        </div>
      </div> 
    );
  }
});

module.exports = Application;