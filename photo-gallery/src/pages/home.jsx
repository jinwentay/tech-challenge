import React, { useEffect } from 'react';
import { userStore } from '../store';
import { Text } from 'theme-ui';
import { useHistory } from 'react-router-dom';
import { observer } from 'mobx-react';

const Home = observer(() => {
  const { account } = userStore;
  const history = useHistory();
  useEffect(() => {
    console.log(account);
    if (account.id === -1) {
      history.push('/login');
    }
  }, [account, history]);
  return (
    <Text variant="hd.lg" sx={{ textAlign: 'center' }}>Welcome to Photo Gallery!</Text>
  )
})

export default Home;