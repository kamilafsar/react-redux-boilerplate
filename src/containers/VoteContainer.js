import {connect} from 'react-redux';
import {upvote, downvote} from '../actions/voteActions';
import Vote from '../components/Vote';

const mapStateToProps = (store, props) => { 
  return { 
    votes: store.votes[props.answerId] || 0
  };
};

const mapDispatchToProps = (dispatch, props) => { 
  return { 
    onUpvote() {
      dispatch(upvote(props.answerId));
    },

    onDownvote() {
      dispatch(downvote(props.answerId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Vote);
