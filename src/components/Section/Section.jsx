import React from 'react';
import PropTypes from 'prop-types';
import { SectionCont, SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionCont>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionCont>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
