var React = require('react');

var headerStyle = {
  fontSize: '16px',
  fontWeight: '300',
  display: 'inline-block',
  margin: '20px 10px'
};

var Header = React.createClass({

  getDefaultProps: function () {
    return {
      text: 'Default header'
    };
  },

  render: function () {
    return (
      <h2 style={headerStyle}>{this.props.text}</h2>
    );
  } 
});

module.exports = Header;