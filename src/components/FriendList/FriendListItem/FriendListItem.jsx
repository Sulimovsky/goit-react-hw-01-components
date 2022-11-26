import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <li className={css.item}>
      <span className={isOnline ? `${css.isOnline}` : `${css.status}`}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};

export default FriendListItem;
