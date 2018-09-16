import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { List, Map } from 'immutable';
import SwitchButton from 'components/SwitchButton';
import Info from 'containers/TicTacToe/Info';
import Role from 'containers/TicTacToe/Role';
import { StyledTicTacToe } from './Styled';
import {
  makeSelectBlocks,
  makeSelectCurrentRole,
  makeSelectMode,
  makeSelectIsWin,
} from './selectors';
import { setBlockValue, setInit, setOnModeToggle } from './actions';

const blockStyle = (id, isWin) => {
  if (isWin.includes(id)) {
    return 'tic-tac-toe__item tic-tac-toe__item-win';
  }
  return 'tic-tac-toe__item';
};

class TicTacToe extends React.Component {
  static propTypes = {
    currentRole: PropTypes.number,
    blocks: PropTypes.instanceOf(List),
    isWin: PropTypes.instanceOf(Map),
    isSinglePlayer: PropTypes.bool,
    handleOnBlockClicked: PropTypes.func,
    handleOnRestartGame: PropTypes.func,
    handleOnSetMode: PropTypes.func,
  };
  static defaultProps = {
    currentRole: 1,
    blocks: null,
    isSinglePlayer: true,
    isWin: null,
    handleOnBlockClicked: () => {},
    handleOnRestartGame: () => {},
    handleOnSetMode: () => {},
  };
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnRestart = this.handleOnRestart.bind(this);
    this.handleOnModeToggle = this.handleOnModeToggle.bind(this);
  }

  handleOnClick(event) {
    const { blocks, currentRole, handleOnBlockClicked } = this.props;
    const id = event.currentTarget.getAttribute('data-id');
    if (!blocks.getIn([id, 'owner'])) {
      handleOnBlockClicked(id, currentRole);
    }
  }

  handleOnRestart() {
    const { handleOnRestartGame } = this.props;
    handleOnRestartGame();
  }

  handleOnModeToggle() {
    const { handleOnSetMode } = this.props;
    handleOnSetMode();
  }

  render() {
    const { blocks, currentRole, isSinglePlayer, isWin } = this.props;

    return (
      <StyledTicTacToe>
        <Info isWin={isWin} currentRole={currentRole} />
        <div className="tic-tac-toe__blocks-wrapper">
          {blocks.map(block => (
            <button
              key={block.get('id')}
              className={blockStyle(block.get('id'), isWin.get('winCaseArr'))}
              data-id={block.get('id')}
              onClick={
                isWin.get('isGameFinished') ? () => {} : this.handleOnClick
              }
            >
              <Role role={block.get('owner')} />
            </button>
          ))}
        </div>
        <button
          className="tic-tac-toe__restart-btn"
          onClick={this.handleOnRestart}
        >
          Restart
        </button>
        <div className="tic-tac-toe__switch-btn-wrapper">
          <SwitchButton
            checked={isSinglePlayer}
            handleOnModeToggle={this.handleOnModeToggle}
          />
          <span>Battle Mode</span>
        </div>
      </StyledTicTacToe>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentRole: makeSelectCurrentRole(),
  blocks: makeSelectBlocks(),
  isSinglePlayer: makeSelectMode(),
  isWin: makeSelectIsWin(),
});

const mapDispatchToProps = dispatch => ({
  handleOnBlockClicked: (id, currentRole) =>
    dispatch(setBlockValue(id, currentRole)),
  handleOnRestartGame: () => dispatch(setInit()),
  handleOnSetMode: () => dispatch(setOnModeToggle()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TicTacToe);
