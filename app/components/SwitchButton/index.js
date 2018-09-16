import React from 'react';
import PropTypes from 'prop-types';
import { StyledSwitchButton } from './Styled';

const SwitchButton = ({ checked, handleOnModeToggle }) => {
  const handleOnClick = () => {
    handleOnModeToggle();
  };
  return (
    <StyledSwitchButton checked={checked}>
      <div
        role="presentation"
        className="switch-button__circle"
        onClick={handleOnClick}
      />
    </StyledSwitchButton>
  );
};

SwitchButton.propTypes = {
  checked: PropTypes.bool,
  handleOnModeToggle: PropTypes.func,
};

SwitchButton.defaultProps = {
  checked: false,
  handleOnModeToggle: () => {},
};

export default SwitchButton;
