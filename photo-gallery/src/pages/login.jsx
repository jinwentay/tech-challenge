import React, { useEffect } from 'react';
import { Flex, Text } from 'theme-ui';
import Input from '../input/input';
import Button from '../button/button';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { observer } from 'mobx-react';
import userStore from '../store/userStore';

const Login = observer(() => {
  const history = useHistory();
  const { account } = userStore;
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    userStore.login(data);
  }

  useEffect(() => {
    console.log(account);
    if (account.id !== -1) {
      history.push('/');
    }
  }, [account, history])
  return (
    <Flex
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        p: '16px',
        height: '100vh',
        bg: 'secondary'
      }}
    >
      <Text variant="hd.xxl" mb="2">Welcome to Photogallery!</Text>
      <Text variant="hd.md" mb="2" sx={{ textAlign: 'center' }}>Login</Text>
      <form style={{ fontFamily: 'Raleway' }} onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Username"
          type="text"
          name="username"
          ref={register({ required: true })}
          error={errors.username}
        />
        {errors.username && errors.username.type === 'required' && (
          <Text color="danger" variant="pg.xs">Username is required</Text>
        )}
        <Button
          variant="default"
          sx={{
            mt: 2,
            width: '100%',
            bg: 'primary'
          }}
          onClick={handleSubmit(onSubmit)}
        >
          Login
        </Button>
      </form>
    </Flex>
  )
});

export default Login;