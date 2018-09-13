import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { List } from 'immutable';
import { StyledTicTacToe } from './Styled';
import { makeSelectBlocks, makeSelectCurrentRole } from './selectors';
import { setBlockValue } from './actions';

const showChess = role => {
  if (role === -1) {
    return 'tic-tac-toe__circle';
  } else if (role === 1) {
    return 'tic-tac-toe__cross';
  }
  return '';
};

class TicTacToe extends React.Component {
  static propTypes = {
    currentRole: PropTypes.number,
    blocks: PropTypes.instanceOf(List),
    handleOnBlockClicked: PropTypes.func,
  };
  static defaultProps = {
    currentRole: 1,
    blocks: null,
    handleOnBlockClicked: () => {},
  };
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(event) {
    const { blocks, currentRole, handleOnBlockClicked } = this.props;
    const id = event.currentTarget.getAttribute('data-id');
    if (!blocks.getIn([id, 'owner'])) {
      handleOnBlockClicked(id, currentRole);
    }
  }

  render() {
    const { blocks } = this.props;
    return (
      <StyledTicTacToe>
        {blocks.map(block => (
          <button
            key={block.get('id')}
            className="tic-tac-toe__item"
            data-id={block.get('id')}
            onClick={this.handleOnClick}
          >
            <span className={showChess(block.get('owner'))} />
          </button>
        ))}
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TicTacToe);
