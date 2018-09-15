import React from 'react';
import PropTypes from 'prop-types';
import Role from 'containers/TicTacToe/Role';
import { StyledInfo } from 'containers/TicTacToe/Styled';

const Info = props => {
  const { isWin, currentRole } = props;
  if (isWin.isGameFinished) {
    return (
      <StyledInfo>
        {isWin.winner ? (
          <div className="info__role-wrapper">
            <Role role={isWin.winner} />
            <span>獲勝 !</span>
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
        <span>輪到</span>
        <Role role={currentRole} />
      </div>
    </StyledInfo>
  );
};

Info.propTypes = {
  isWin: PropTypes.object,
  currentRole: PropTypes.number,
};

Info.defaultProps = {
  isWin: null,
  currentRole: 0,
};

export default Info;
