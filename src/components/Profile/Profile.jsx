import PropTypes from 'prop-types';
import css from './Profile.module.css';

const Profile = ({ profile }) => {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = profile;

  return (
    <div className={css.profile}>
      <div className={css.description}>
        <div className={css.box}>
          <img src={avatar} alt={username} />
        </div>
        <p className={css.name}>{username}</p>
        <p className={css.tag}>{`@${tag}`}</p>
        <p>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.item}>
          <span>Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li className={css.item}>
          <span>Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li className={css.item}>
          <span>Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  profile: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Profile;
