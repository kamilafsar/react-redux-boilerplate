import './Thread.scss';
import React from 'react';
import Question from './Question';
import Answer from './Answer';

export default class Thread extends React.Component {

  static propTypes = {
    question: React.PropTypes.shape({
      title: React.PropTypes.string.isRequired,
      text: React.PropTypes.string.isRequired,
      postedAt: React.PropTypes.instanceOf(Date).isRequired,
    }).isRequired,
    answers: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        text: React.PropTypes.string.isRequired,
        postedAt: React.PropTypes.instanceOf(Date).isRequired,
      })
    ),
  };

  render() {
    return <article className="Thread">
      <h1>{this.props.question.title}</h1>
      <Question
        text={this.props.question.text}
        postedAt={this.props.question.postedAt}
      />
      <h2>Answers</h2>
      {this.props.answers.map(answer => {
        return <Answer
          key={answer.id}
          id={answer.id}
          text={answer.text}
          postedAt={answer.postedAt}
        />;
      })}
    </article>;
  }
}
