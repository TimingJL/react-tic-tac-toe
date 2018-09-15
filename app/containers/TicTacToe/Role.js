import React from 'react';
import PropTypes from 'prop-types';
import { CIRCLE, CROSS } from 'containers/TicTacToe/constants';
import { Circle, Cross } from 'containers/TicTacToe/Styled';

const Role = props => {
  const { role } = props;
  if (role === CIRCLE) {
    return <Circle />;
  } else if (role === CROSS) {
    return <Cross />;
  }
  return null;
};

Role.propTypes = {
  role: PropTypes.number,
};

Role.defaultProps = {
  role: 0,
};

export default Role;
