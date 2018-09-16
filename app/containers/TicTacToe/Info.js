import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import Role from 'containers/TicTacToe/Role';
import { StyledInfo } from 'containers/TicTacToe/Styled';

const Info = props => {
  const { isWin, currentRole } = props;
  if (isWin.get('isGameFinished')) {
    return (
      <StyledInfo>
        {isWin.get('winner') ? (
          <div className="info__role-wrapper">
            <Role role={isWin.get('winner')} />
            <span>WIN !</span>
          </div>
        ) : (
          <div>平手 !</div>
        )}
      </StyledInfo>
    );
  }
  return (
    <StyledInfo>
      <div className="info__role-wrapper">
        <span>Player</span>
        <Role role={currentRole} />
      </div>
    </StyledInfo>
  );
};

Info.propTypes = {
  isWin: PropTypes.instanceOf(Map),
  currentRole: PropTypes.number,
};

Info.defaultProps = {
  isWin: null,
  currentRole: 0,
};

export default Info;
