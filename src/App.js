import React from 'react';
import Thread from './components/Thread';

export default class App extends React.Component {
  render() {
    return <Thread
      question={{
        title: 'How do I check if a number is positive or negative in c#?',
        text: `This must be a common question; however, I cannot seem to find a neat way of doing it.
               How do I check if a number is positive or negative?
               Thanks.`,
        postedAt: new Date(),
      }}
      answers={[
        {
          id: 1,
          text: `bool positive = number > 0;
                 bool negative = number < 0;`,
          postedAt: new Date(),
        },
        {
          id: 2,
          text: `Of course no-one's actually given the correct answer,
                 num != 0   // num is positive *or* negative!`,
          postedAt: new Date(),
        }
      ]}
    />;
  }
}
