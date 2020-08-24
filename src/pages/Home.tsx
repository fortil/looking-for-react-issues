import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useDispatch } from 'react-redux';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Search from '../components/Search';
import Title from '../components/Title';
import List from '../components/List';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import actions from '../store/actions';

const useStyles = makeStyles(() => ({
  box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const theme = useTheme();
  const xl = useMediaQuery(theme.breakpoints.up('xl'));
  const lg = useMediaQuery(theme.breakpoints.up('lg'));
  const md = useMediaQuery(theme.breakpoints.up('md'));
  const sm = useMediaQuery(theme.breakpoints.up('sm'));

  const strBreak = xl ? 'xl' : lg ? 'lg' : md ? 'md' : sm ? 'sm' : 'xs';
  const numberBreak = xl ? 8 : lg ? 6 : md ? 4 : sm ? 2 : 0;

  React.useEffect(() => {
    dispatch(actions.getReactIssues(true));
  }, [dispatch]);
  return (
    <>
      <CssBaseline />
      <Container maxWidth={strBreak}>
        <Box m={numberBreak} className={classes.box}>
          <Title />
          <Search />
          <List />
        </Box>
      </Container>
    </>
  );
}

export default Home;