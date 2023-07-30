import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackContainer, FeedbackButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedBack }) => {
  return (
    <FeedbackContainer title="Please leave feedback">
      {options.map(option => (
        <FeedbackButton
          key={option}
          type="button"
          onClick={() => onLeaveFeedBack(option)}
        >
          {option}
        </FeedbackButton>
      ))}
    </FeedbackContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedBack: PropTypes.func.isRequired,
};
