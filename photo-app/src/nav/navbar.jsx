import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Box, Flex, Text } from 'theme-ui';
import { observer } from 'mobx-react';
import { userStore } from '../store';
import Button from '../button/button';
import ls from 'local-storage';

const Navbar = observer(() => {
  const { account, logout } = userStore;
  return (
    <Box
      sx={{
        zIndex: 3,
        position: 'sticky',
        top: '0px',
        left: '0px',
        boxShadow: 'stroke.bottom',
        maxWidth: '100px',
      }}
    >
      <Flex
        sx={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100vh',
          p: 3,
          backgroundColor: 'primary',
        }}
      >
        <Text variant="hd.md">Photogallery</Text>
        <Link to="/login"><Button variant="secondary" onClick={logout}>Logout</Button></Link>
      </Flex>
    </Box>
  )
});

export default Navbar;