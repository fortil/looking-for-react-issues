import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../store/actions';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { IInitialState } from '../../store/initial-state';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 40,
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function CustomizedInputBase() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const issues = useSelector((state: IInitialState) => state.ISSUES);
  const [search, setSearch] = React.useState('');

  const onInputChange = React.useCallback((_, value) => {
    setSearch(value);
  }, []);

  const onChange = React.useCallback((_, value) => {
    dispatch(actions.issuesSelected([value]));
  }, [dispatch]);

  const submit = React.useCallback((evt) => {
    evt.preventDefault();
    (document.getElementById('auto-complete') as any).blur();
    if (search) {
      const issuesSelected = issues.filter(({ title }) => title.toLowerCase().includes(search.toLowerCase()));
      dispatch(actions.issuesSelected(issuesSelected));
    }
  }, [issues, search, dispatch]);

  const onClose = React.useCallback((_, reason) => {
    if (reason === 'blur' && !!search) {
      const issuesSelected = issues.filter(({ title }) => title.toLowerCase().includes(search.toLowerCase()));
      dispatch(actions.issuesSelected(issuesSelected));
    }
  }, [dispatch, issues, search]);


  return (
    <Paper id='paper-autocomplete' component='form' className={classes.root} onSubmit={submit}>
      <Autocomplete
        id='auto-complete'
        options={issues}
        clearOnBlur={false}
        onChange={onChange}
        onInputChange={onInputChange}
        onClose={onClose}
        getOptionLabel={(option) => option.title}
        style={{ width: 375 }}
        renderInput={(params) => <TextField
          {...params}
          label='Search React issues'
          margin='normal'
          variant='outlined'
          InputProps={{ ...params.InputProps, type: 'search', className: classes.input }}
        />}
      />
    </Paper>
  );
}
