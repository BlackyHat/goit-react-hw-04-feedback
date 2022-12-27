import { useState } from 'react';
//
import PropTypes from 'prop-types';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Statistic from 'components/FeedbackStatistic';
import Notification from 'components/Notification';
const OPTIONS = ['good', 'neutral', 'bad'];

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + bad + neutral;
  const onLeaveFeedback = e => {
    const type = e.currentTarget.value;
    switch (type) {
      case 'good':
        return setGood(prevState => prevState + 1);
      case 'neutral':
        return setNeutral(prevState => prevState + 1);
      case 'bad':
        return setBad(prevState => prevState + 1);
      default:
        return;
    }
  };
  const countPositiveFeedbackPercentage = () => {
    const res = ((good / total) * 100).toFixed();
    return (res > 0 ? res : 0) + ' %';
  };
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={OPTIONS} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}

FeedbackOptions.propTypes = {
  OPTIONS: PropTypes.arrayOf(PropTypes.string.isRequired),
};
