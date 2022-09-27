import PropTypes from 'prop-types';
import css from '../styles/transactionsStyle.module.css';

const trancations = ({ items }) => {
  return (
    <table className={css.transactions_history}>
      <thead>
        <tr className={css.head}>
          <th className={css.item}>Type</th>
          <th className={css.item}>Amount</th>
          <th className={css.item}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((elem, index) => {
          return (
            <tr
              key={elem.id}
              style={{ backgroundColor: index % 2 === 0 ? 'gray' : 'yellow' }}
            >
              <td>{elem.type}</td>
              <td>{elem.amount}</td>
              <td>{elem.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

trancations.prototype = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
export default trancations;
