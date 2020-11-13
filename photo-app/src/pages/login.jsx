import React, { useEffect } from 'react';
import { Flex, Text } from 'theme-ui';
import Input from '../input/input';
import Button from '../button/button';
import { useForm } from 'react-hook-form';
import { useHistory, Redirect } from 'react-router-dom';
import { observer } from 'mobx-react';
import userStore from '../store/userStore';
import styled from '@emotion/styled';

const SText = styled(Text)`
  background-color: #DFC8B6;
`
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
      <SText variant="hd.xxl" mb="2">Welcome to Photogallery!</SText>
      <SText variant="hd.md" mb="2" sx={{ textAlign: 'center' }}>Login</SText>
      <form style={{ fontFamily: 'Raleway', backgroundColor: '#DFC8B6' }} onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Username"
          type="text"
          name="username"
          ref={register({ required: true })}
          sx={{ backgroundColor: 'secondary' }}
        />
        {errors.username && errors.username.type === 'required' && (
          <SText color="danger" variant="pg.xs">Username is required</SText>
        )}
        {state === 'ERROR' && (
          <SText color="danger" variant="pg.xs">User not found!</SText>
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