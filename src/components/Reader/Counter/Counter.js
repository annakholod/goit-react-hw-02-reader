import React from 'react';
import PropTypes from 'prop-types';
import style from './Counter.module.css';
import Controls from '../Controls/Controls';

const Counter = ({ count, items, decrement, increment }) => (
  <div>
    <p className={style.counter}>
      {count}/{items.length}
    </p>
    <Controls
      decrement={decrement}
      increment={increment}
      count={count}
      items={items}
    />
  </div>
);

Counter.propTypes = {
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Counter;
