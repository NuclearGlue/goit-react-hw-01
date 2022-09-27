const friends = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, name, online, id }) => {
        return (
          <li key={id} className="item">
            <span className="status">{online}</span>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default friends;
