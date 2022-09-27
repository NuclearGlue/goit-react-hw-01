import user from 'components/profile/user.json'
import data from 'components/statistics/data.json'
import friends from "components/friends/friendlist.json";
import transactions from "components/transactions/transactions.json";

import Profile from 'components/profile/profile'
import Statistics from 'components/statistics/statistics';
import FriendList from 'components/friends/friends'
import TransactionHistory from "components/transactions/transactions"

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        fontSize: 24,
        color: '#010101'
      }}
    >
      <Profile username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}/>
    
       <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />  
      <FriendList friends={friends} />
      
      <TransactionHistory items={transactions} />
          </div>
  );
};
