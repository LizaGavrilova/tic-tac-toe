import React from 'react';
import PropTypes from 'prop-types';

import { Square } from '../Square'

import './Board.scss';

function Board({size, squares, click}) {

  return (
    <div className='board'>
      {
        squares.map((square, i) => (
          <Square
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            size={size}
            value={square}
            click={() => click(i)} />
        ))
      }
    </div>       
  );
}

Board.defaultProps = {
  size: 3,
  squares: [],
  click: () => {}
};

Board.propTypes = {
  size: PropTypes.number,
  squares: PropTypes.arrayOf(PropTypes.string),
  click: PropTypes.func,
};

export default Board;