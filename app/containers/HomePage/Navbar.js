/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

// Stateless Functional Component

const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="navbar-brand">
        <i className="fa fa-shopping-cart fa-lg m-2" aria-hidden="true" />
        <span className="badge badge-pill badge-info m-2" style={{ width: 50 }}>
          {totalCounters}
        </span>
        Items
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  totalCounters: PropTypes.string.isRequired,
};

export default Navbar;
