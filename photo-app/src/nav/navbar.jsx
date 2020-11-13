import React from 'react';
import { Grid, Flex, Text } from 'theme-ui';
import { observer } from 'mobx-react';
import { photoStore, userStore } from '../store';
import Button from '../button/button';
import styled from '@emotion/styled';

const MenuItem = styled(Text)`
  text-overflow: ellipsis;
  overflow: hidden;
  color: white;
  white-space: nowrap;
  max-width: 218px;
  cursor: pointer;
  &:hover {
    color: #DFC8B6;
    background-color: white;
  }
  height: 100%;
  width: 100%;
  text-align: center;
  padding: 16px;
  border-bottom: 1px solid white;
`

const Navbar = observer(() => {
  const { account, logout } = userStore;
  const { albums, getPhotos } = photoStore;
  return (
    <Flex
      sx={{
        zIndex: 3,
        position: 'sticky',
        top: '0px',
        left: '0px',
        boxShadow: 'stroke.bottom',
        maxWidth: '200px',
        height: '100vh',
        backgroundColor: 'primary',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
        <Grid
          sx={{
            gridTemplateRows: '200px 1fr',
            gap: '0px',
            maxHeight: 'calc(100vh - 72px)',
            minHeight: 'calc(100vh - 72px)',
            backgroundColor: 'primary',
          }}
        >
          <Flex
            sx={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-around',
              px: 3,
              // py: 2,
              backgroundColor: 'primary',
              borderBottom: '1px solid white'
            }}
          >
            <Text variant="hd.md" bg="primary">Photogallery</Text>
            <Text variant="lb.lg" bg="primary" sx={{ textAlign: 'center' }}>Welcome <br/>{account.name}!</Text>
            <Text variant="hd.md" bg="primary">Your Albums</Text>
          </Flex>
          <Grid sx={{ gridAutoRows: '50px', gap: '0px', overflow: 'scroll', backgroundColor: 'primary', }}>
            {albums.map((album) => (
              <MenuItem 
                key={album.id}
                variant="lb.sm"
                sx={{
                  backgroundColor: 'primary'
                }}
                onClick={() => getPhotos(album)}
              >
                {album.title.charAt(0).toUpperCase() + album.title.slice(1)}
              </MenuItem>
            ))}
          </Grid>
        </Grid>
        <Button mb="3" variant="secondary" onClick={logout}>Logout</Button>
    </Flex>
  )
});

export default Navbar;