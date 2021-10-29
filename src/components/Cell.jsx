import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/Cell.module.scss';
import isNil from '../util/isNil';
import not from '../util/not';
import cellKey from '../util/cellKey';

const Cell = function Cell(props) {
  const { cell: { isActive, row, col } } = props;

  /* Styles */
  const classNames = [styles.cell, (isActive ? styles.active : null)].filter(not(isNil)).join(' ');

  return (
    <div className={classNames} cell-key={cellKey(row, col)} />
  );
};
Cell.propTypes = {
  cell: PropTypes.shape({
    isActive: PropTypes.bool,
    row: PropTypes.number,
    col: PropTypes.number,
  }),
};
Cell.defaultProps = {
  cell: PropTypes.shape({
    isActive: false,
    row: 0,
    col: 0,
  }),
};

export default Cell;
