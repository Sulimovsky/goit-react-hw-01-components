import Section from 'components/common/Section/Section';
import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import profile from '../../data/user.json';
import stats from '../../data/data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';

const App = () => {
  return (
    <>
      <Section>
        <Profile profile={profile} />
      </Section>
      <Section>
        <Statistics title="Upload stats" stats={stats} />
      </Section>
      <Section>
        <FriendList friends={friends} />
      </Section>
      <Section>
        <TransactionHistory transactions={transactions} />
      </Section>
    </>
  );
};

export default App;
