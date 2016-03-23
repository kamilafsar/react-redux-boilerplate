import React from 'react';

export default class TimeAgo extends React.Component {

  state = { minutesAgo: 0 };

  intervalId = null;

  componentDidMount() {
    this.intervalId = window.setInterval(() => this.tick(), 5000)
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalId);
  }

  tick() {
    const minutesAgo = (Date.now() - this.props.date) / 60000;
    this.setState({ minutesAgo: minutesAgo });
  }

  render() {
    return <span className="TimeAgo">{this.getText()}</span>;
  }

  getText() {
    const minutesAgo = this.state.minutesAgo;

    if (minutesAgo < 1) {
      return 'Posted just a few seconds ago';
    }
    else if (minutesAgo < 5) {
      return 'Posted just a few minutes ago';
    }
    else {
      return `Posted ${minutesAgo} minutes ago`;
    }
  }
}
