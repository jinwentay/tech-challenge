import React, { useEffect } from 'react';
import userStore from '../store/userStore';
import { Text } from 'theme-ui';
import { useHistory } from 'react-router-dom';
import { observer } from 'mobx-react';
import Navbar from '../nav/navbar';

const Home = observer(() => {
  const { account, isLoggedIn } = userStore;
  const history = useHistory();
  useEffect(() => {
    console.log(account, isLoggedIn);
    if (account.id === -1) {
      history.push('/login');
    }
  }, [account, history. isLoggedIn]);
  return (
    <>
      <Navbar/>
      <Text variant="hd.lg" sx={{ textAlign: 'center' }}>Welcome to Photo Gallery!</Text>
    </>
  )
})

export default Home;