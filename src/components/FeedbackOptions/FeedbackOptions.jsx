import React from 'react';
import PropTypes from 'prop-types';
import { OptionsList, OptionsBtn } from './Feedbackoptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsList>
      {options.map(opt => (
        <li key={opt}>
          <OptionsBtn type="button" onClick={onLeaveFeedback}>
            {opt}
          </OptionsBtn>
        </li>
      ))}
    </OptionsList>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
