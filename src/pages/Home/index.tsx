import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Search from '../../components/Search';
import Title from '../../components/Title';
import List from '../../components/List';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

function Home() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box m={6}>
          <Title />
          <Search />
          <List />
        </Box>
      </Container>
    </>
  );
}

export default Home;