import React from 'react';
import PropTypes from 'prop-types';
import style from './Controls.module.css';
import { checkButtonStart, checkButtonEnd } from '../../../helpers/helpers';

const Controls = ({ decrement, increment, count, items }) => (
  <section className={style.controls}>
    <button
      type="button"
      className={`${checkButtonStart(style, count)}`}
      onClick={decrement}
    >
      Назад
    </button>
    <button
      type="button"
      className={`${checkButtonEnd(style, count, items)}`}
      onClick={increment}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
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

export default Controls;
