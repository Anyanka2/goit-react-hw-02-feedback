import React from 'react';
import PropTypes from 'prop-types';
import { List, Item, Container } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, totalPercentage }) => {
  return (
    <Container>
    <List>
      <Item>Good: {good}</Item>
      <Item>Neutral: {neutral}</Item>
      <Item>Bad: {bad}</Item>
      <Item>Total: {total}</Item>
      <Item>Positive Feedback: {totalPercentage}%</Item>
      </List>
      </Container>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
