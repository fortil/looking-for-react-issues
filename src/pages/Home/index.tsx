import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Search from '../../components/Search';
import Title from '../../components/Title';
import List from '../../components/List';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import actions from '../../store/actions';
import { useDispatch } from 'react-redux';

function Home() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(actions.getReactIssues(true));
  }, [dispatch]);
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