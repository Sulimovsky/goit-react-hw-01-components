import React from 'react';
import PropTypes from 'prop-types';
import css from './TransactionHistoryItem.module.css';

const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <tr className={css.tr}>
      <td className={css.td}>{type}</td>
      <td className={css.td}>{amount}</td>
      <td className={css.td}>{currency}</td>
    </tr>
  );
};

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistoryItem;
