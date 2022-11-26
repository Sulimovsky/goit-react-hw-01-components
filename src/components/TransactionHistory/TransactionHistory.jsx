import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
import TransactionHistoryItem from './TransactionHistoryItem/TransactionHistoryItem';

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => {
          const { id, type, amount, currency } = transaction;
          return (
            <TransactionHistoryItem
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
