import PropTypes from 'prop-types';
import css from '../styles/friendsStyle.module.css';

const FriendItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li key={id} className={css.item}>
      <span
        className={css.status}
        style={{ backgroundColor: isOnline === true ? 'green' : 'red' }}
      ></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendItem;
