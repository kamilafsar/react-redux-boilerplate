
const initialState = {};

export default function votesReducer(state = initialState, action) {

  switch (action.type) {

    case 'UPVOTE':
      return Object.assign(
        {},
        state,
        { [action.answerId]:  (state[action.answerId] || 0) + 1 }
      );

    case 'DOWNVOTE':
      return Object.assign(
        {},
        state,
        { [action.answerId]: (state[action.answerId] || 0) - 1 }
      );

    default:
      return state;
  }
}
