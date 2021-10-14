import PropTypes from "prop-types";
import defaultImage from "../../common/default.jpg";
import s from "./FriendList.module.css";

function FriendList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map((friend) => (
        <li className={s.item} key={friend.id}>
          <span className={friend.isOnline ? s.online : s.offline}></span>
          <img
            className={s.avatar}
            src={friend.avatar ?? defaultImage}
            alt={friend.name}
            width="48"
          />
          <p className={s.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
    })
  ),
};

export default FriendList;
