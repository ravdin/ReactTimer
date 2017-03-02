var React = require('react');

var TimerControls = React.createClass({
  propTypes: {
    timerStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },
  onStatusChange: function (newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    }
  },
  render: function () {
    const {timerStatus} = this.props;
    const renderStartStopButton = () => {
      switch (timerStatus) {
        case 'started':
          return <button className="button primary" onClick={this.onStatusChange('paused')}>Stop</button>
        case 'stopped':
        case 'paused':
          return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
      }
    };

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    );
  }
});

module.exports = TimerControls;
