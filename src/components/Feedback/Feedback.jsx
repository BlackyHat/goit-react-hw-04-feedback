import React from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Statistic from 'components/FeedbackStatistic';
import Notification from 'components/Notification';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const type = e.target.textContent;
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, el) => (acc += el), 0);
  };
  countPositiveFeedbackPercentage = () => {
    const res = ((this.state.good / this.countTotalFeedback()) * 100).toFixed();
    return (res > 0 ? res : 0) + ' %';
  };

  render() {
    const feedbackOptions = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedbackOptions}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default Feedback;
