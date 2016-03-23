
export function upvote(answerId) {
  return {
    type: 'UPVOTE',
    answerId,
  };
}

export function downvote(answerId) {
  return {
    type: 'DOWNVOTE',
    answerId,
  };
}
