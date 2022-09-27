import PropTypes from 'prop-types';
import css from '../styles/statisticsStyle.module.css';

const statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className={css.title}>{title}</h2>

      <ul className={css.stat_list}>
        {stats.map(elem => (
          <li key={elem.id} className={css.item}>
            <span className="label">{elem.label}</span>
            <span className="percentage">{elem.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

statistics.prototype = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
export default statistics;
