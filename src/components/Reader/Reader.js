import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Reader.module.css';
import Counter from './Counter/Counter';
import Publication from './Publication/Publication';

class Reader extends Component {
  state = {
    count: 1,
  };

  increment = () => {
    if (this.state.count <= this.props.items.length - 1) {
      this.setState(prevState => ({ count: prevState.count + 1 }));
    }
  };

  decrement = () => {
    if (this.state.count > 1) {
      this.setState(prevState => ({ count: prevState.count - 1 }));
    }
  };

  render() {
    const { items } = this.props;
    const { count } = this.state;

    return (
      <div className={style.reader}>
        <Publication item={items[count - 1]} />
        <Counter
          items={items}
          count={count}
          increment={this.increment}
          decrement={this.decrement}
        />
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
