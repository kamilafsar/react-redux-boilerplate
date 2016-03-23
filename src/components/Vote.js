import React from 'react';

export default class Vote extends React.Component {

  static propTypes = {
    votes: React.PropTypes.number.isRequired,
    onUpvote: React.PropTypes.func.isRequired,
    onDownvote: React.PropTypes.func.isRequired,
  };

  render() {
    return <div className="Vote">
      <p>Votes: {this.props.votes}</p>
      <button onClick={this.props.onUpvote}>upvote</button>
      <button onClick={this.props.onDownvote}>downvote</button>
    </div>;
  }

}
