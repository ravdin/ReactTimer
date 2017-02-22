var React = require('react');

var Clock = React.createClass({
  getDefaultProps: function() {
    return {
      totalSeconds: 0
    }
  },
  propTypes: {
    totalSeconds: React.PropTypes.number
  },
  formatSeconds: function(totalSeconds) {
    var seconds = ('0' + totalSeconds % 60).slice(-2);
    var minutes = ('0' + Math.floor(totalSeconds / 60)).slice(-2);
    return minutes + ':' + seconds;
  },
  render: function () {
    var {totalSeconds} = this.props;
    return (
      <div className="clock">
        <span className="clock-text">
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>
    );
  }
});

module.exports = Clock;
