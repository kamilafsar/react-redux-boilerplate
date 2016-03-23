import React from 'react';
import VoteContainer from '../containers/VoteContainer';
import TimeAgo from './TimeAgo';

export default class Answer extends React.Component {

  static propTypes = {
    id: React.PropTypes.number.isRequired,
    text: React.PropTypes.string.isRequired,
    postedAt: React.PropTypes.instanceOf(Date).isRequired,
  };

  render() {
    return <div className="Answer">
      <VoteContainer answerId={this.props.id} />
      <p className="text">{this.props.text}</p>
      <p className="posted">
        <TimeAgo date={this.props.postedAt} />
      </p>
    </div>;
  }
}
