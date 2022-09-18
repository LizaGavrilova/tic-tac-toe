import React from 'react';
import PropTypes from 'prop-types';

import './Square.scss';

function Square({size, value, click}) {

  return (
    <button
      type='button'
      className='square'
      onClick={click}
      style={{width: `calc(100%/${size})`, height: `calc(100%/${size})`, fontSize: `calc(160px/${size})`}}>
      {value}
    </button>       
  );
}

Square.defaultProps = {
  size: 3,
  value: '',
  click: () => {}
};

Square.propTypes = {
  size: PropTypes.number,
  value: PropTypes.string,
  click: PropTypes.func,
};

export default Square;