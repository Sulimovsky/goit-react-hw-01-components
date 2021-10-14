import PropTypes from "prop-types";
import randomColor from "../../common/randomColor";
import s from "./Statistics.module.css";

function Statistics({ title, items }) {
  return (
    <div className={s.statistics}>
      <h2 className={s.title}>{title ? title : "Upload stats"}</h2>

      <ul className={s.list}>
        {items.map((item) => (
          <li
            className={s.item}
            style={{ backgroundColor: randomColor() }}
            key={item.id}
          >
            <span className={s.label}>{item.label}</span>
            <span className={s.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
