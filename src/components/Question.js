import React from 'react';
import TimeAgo from './TimeAgo';

export default class Question extends React.Component {

  static propTypes = {
    text: React.PropTypes.string.isRequired,
    postedAt: React.PropTypes.instanceOf(Date).isRequired,
  };

  render() {
    return <div className="Question">
      <p className="text">{this.props.text}</p>
      <p className="posted">
        <TimeAgo date={this.props.postedAt} />
      </p>
    </div>;
  }
}
