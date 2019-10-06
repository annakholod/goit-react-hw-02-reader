import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Reader.module.css';
import Counter from './Counter/Counter';
import Publication from './Publication/Publication';

class Reader extends Component {
  state = {
    count: 1,
  };

  changeCount = ({ target }) => {
    const { name } = target;

    this.setState(prevState => ({
      count: name === 'increment' ? prevState.count + 1 : prevState.count - 1,
    }));
  };

  render() {
    const { items } = this.props;
    const { count } = this.state;

    return (
      <div className={style.reader}>
        <Publication item={items[count - 1]} />
        <Counter items={items} count={count} changeCount={this.changeCount} />
      </div>
    );
  }
}

Reader.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Reader;
