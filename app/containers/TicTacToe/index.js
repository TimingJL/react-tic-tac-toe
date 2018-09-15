import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { List } from 'immutable';
import { getWinner } from 'containers/TicTacToe/utils';
import Info from 'containers/TicTacToe/Info';
import Role from 'containers/TicTacToe/Role';
import { StyledTicTacToe } from './Styled';
import { makeSelectBlocks, makeSelectCurrentRole } from './selectors';
import { setBlockValue, setInit } from './actions';

class TicTacToe extends React.Component {
  static propTypes = {
    currentRole: PropTypes.number,
    blocks: PropTypes.instanceOf(List),
    handleOnBlockClicked: PropTypes.func,
    handleOnRestartGame: PropTypes.func,
  };
  static defaultProps = {
    currentRole: 1,
    blocks: null,
    handleOnBlockClicked: () => {},
    handleOnRestartGame: () => {},
  };
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnRestart = this.handleOnRestart.bind(this);
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

  render() {
    const { blocks, currentRole } = this.props;
    const isWin = getWinner(blocks);

    return (
      <StyledTicTacToe>
        <Info isWin={isWin} currentRole={currentRole} />
        <div className="tic-tac-toe__blocks-wrapper">
          {blocks.map(block => (
            <button
              key={block.get('id')}
              className="tic-tac-toe__item"
              data-id={block.get('id')}
              onClick={isWin.isGameFinished ? () => {} : this.handleOnClick}
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
      </StyledTicTacToe>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentRole: makeSelectCurrentRole(),
  blocks: makeSelectBlocks(),
});

const mapDispatchToProps = dispatch => ({
  handleOnBlockClicked: (id, currentRole) =>
    dispatch(setBlockValue(id, currentRole)),
  handleOnRestartGame: () => dispatch(setInit()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TicTacToe);
