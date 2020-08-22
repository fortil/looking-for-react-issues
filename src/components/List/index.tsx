import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import BugReportIcon from '@material-ui/icons/BugReport';
import MouseTrap from 'mousetrap';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 40,
    width: '100%',
    maxWidth: 400,
    backgroundColor: theme.palette.background.paper,
  },
}));

const issues = [
  { title: 'Photos', tags: 'hello asd asd' },
  { title: 'Photos 1', tags: 'hello as' },
  { title: 'Photos 2', tags: 'hello asds' },
  { title: 'Photos 3', tags: 'hello' },
];

function IssueList() {
  const classes = useStyles();
  const [itemSelected, setItemSelected] = React.useState<number>();
  const goDown = React.useCallback(() => {
    setItemSelected(prev => {
      return typeof prev === 'undefined' ? 0 : prev === issues.length - 1 ? 0 : prev + 1;
    })
  }, []);
  React.useEffect(() => {
    MouseTrap.bind('down', goDown);
    return () => MouseTrap.unbind('down')
  }, [goDown]);

  return (
    <List className={classes.root}>
      {issues.map((issue, i) => (<ListItem button key={i} selected={itemSelected === i}>
        <ListItemAvatar>
          <Avatar>
            <BugReportIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={issue.title} secondary={issue.tags} />
      </ListItem>))}
    </List>
  );
}

export default IssueList;