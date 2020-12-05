/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

class Counters extends Component {
  render() {
    const {
      onReset,
      onIncrement,
      onDelete,
      onDecrement,
      counters,
      onRestart,
    } = this.props;
    return (
      <div>
        <button
          type="button"
          className="btn btn-success m-2"
          onClick={onReset}
          disabled={counters.length === 0 ? 'disabled' : ''}
        >
          <i className="fa fa-refresh" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={onRestart}
          disabled={counters.length !== 0 ? 'disabled' : ''}
        >
          <i className="fa fa-recycle" aria-hidden="true" />
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }
}

Counters.propTypes = {
  counters: PropTypes.object.isRequired,
  onReset: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onRestart: PropTypes.func.isRequired,
};

export default Counters;
