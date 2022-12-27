import React from 'react';
import PropTypes from 'prop-types';
import { OptionsList, OptionsBtn } from './Feedbackoptions.styled';
import { BsEmojiHeartEyes, BsEmojiNeutral, BsEmojiAngry } from 'react-icons/bs';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsList>
      {options.map(opt => (
        <li key={opt}>
          <OptionsBtn type="button" value={opt} onClick={onLeaveFeedback}>
            {getEmoji(opt)}
            {opt}
          </OptionsBtn>
        </li>
      ))}
    </OptionsList>
  );
};

const getEmoji = type => {
  switch (type) {
    case 'good':
      return <BsEmojiHeartEyes size={14} />;
    case 'neutral':
      return <BsEmojiNeutral size={14} />;
    case 'bad':
      return <BsEmojiAngry size={14} />;
    default:
      return;
  }
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
