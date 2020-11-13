import React, { useEffect, useState } from 'react';
import { Spinner, Flex, Grid } from 'theme-ui';
import { useHistory, Redirect } from 'react-router-dom';
import { observer } from 'mobx-react';
import Navbar from '../nav/navbar';
import { photoStore, userStore } from '../store';
import PhotoCard from '../card/photoCard';

const Home = observer(() => {
  const { account, isLoggedIn } = userStore;
  const { photos, albums, selectedAlbum, loadingState } = photoStore;
  const history = useHistory();

  const [width, setWidth] = useState(Math.ceil((window.innerWidth - 282)/4));
  useEffect(() => {
    window.addEventListener('resize', () => {
      const size = Math.ceil((window.innerWidth - 282)/4);
      setWidth(size);
    });
    return () => {
      window.removeEventListener('resize', () => {
        const size = Math.ceil((window.innerWidth - 282)/4);
        setWidth(size);
      });
    }
  }, [])

  if (account.id === -1) {
    return <Redirect to="/login"/>
  }
  return (
    <>
      <Navbar/>
      <Flex
        sx={{
          position: 'absolute',
          top: 0,
          left: '200px',
          width: 'calc(100vw - 200px)',
          p: 3,
          backgroundColor: 'white',
          minHeight: '100vh',
          maxHeight: '100vh'
        }}
      >
        {/* <Text variant="hd.lg" sx={{ textAlign: 'center' }}>Welcome to Photo Gallery!</Text> */}
        {loadingState === 'LOADING' 
          ? <Flex sx={{ justifyContent: 'center', alignItems: 'center' }}><Spinner/></Flex>
          : <Grid
              sx={{
                gridTemplateColumns: `repeat( auto-fill, minmax(100px, ${width + 'px'}) );`,
                gridAutoRows: width > 100 ? width + 'px' : '100px',
                border: '1px solid border',
                overflow: 'scroll',
                width: 'calc(100vw - 200px)'
              }}
            >
              {photos.map((photo) => (
                <PhotoCard key={photo.title} width={width} title={photo.title} url={photo.url}/>
              ))}
            </Grid>
        }
      </Flex>
    </>
  )
})

export default Home;