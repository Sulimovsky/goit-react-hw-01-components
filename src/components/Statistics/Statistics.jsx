import PropTypes from 'prop-types';
import generateColor from 'components/common/generate-color';
import css from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <div className={css.box}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.list}>
        {stats.map(({ id, label, percentage }) => (
          <li
            style={{
              flexBasis: `calc(100% / ${stats.length})`,
              backgroundColor: generateColor(),
            }}
            className={css.item}
            key={id}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{`${percentage}%`}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default Statistics;
