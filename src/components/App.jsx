import { useState } from 'react';
import Section from 'components/Section';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Notification from 'components/Notification';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = option => {
    setFeedback(prevState => {
      const value = prevState[option];
      return { ...prevState, [option]: value + 1 };
    });
  };

  const countTotal = () => {
    return Object.values(feedback).reduce((acc, val) => acc + val, 0);
  };

  const countPositive = total => {
    return Math.round((good / total) * 100);
  };

  const { good, neutral, bad } = feedback;
  const options = Object.keys(feedback);
  const total = countTotal();
  const positivePercentage = countPositive(total);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {!total ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </>
  );
};

export default App;
