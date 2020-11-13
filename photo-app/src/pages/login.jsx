import React, { useEffect } from 'react';
import { Flex, Text } from 'theme-ui';
import Input from '../input/input';
import Button from '../button/button';
import { useForm } from 'react-hook-form';
import { useHistory, Redirect } from 'react-router-dom';
import { observer } from 'mobx-react';
import userStore from '../store/userStore';

const Login = observer(() => {
  const history = useHistory();
  const { account, state } = userStore;
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    userStore.login(data);
  }

  if (account.id !== -1) {
    return <Redirect to="/"/>;
  }
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
        />
        {errors.username && errors.username.type === 'required' && (
          <Text color="danger" variant="pg.xs">Username is required</Text>
        )}
        {state === 'ERROR' && (
          <Text color="danger" variant="pg.xs">User not found!</Text>
        )}
        <Button
          variant="default"
          sx={{
            mt: 2,
            width: '100%',
            bg: 'primary',
          }}
          size="sm"
          disabled={state === 'LOADING'}
          onClick={handleSubmit(onSubmit)}
        >
          Login
        </Button>
      </form>
    </Flex>
  )
});

export default Login;