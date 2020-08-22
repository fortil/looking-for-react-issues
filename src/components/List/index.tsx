import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import BugReportIcon from '@material-ui/icons/BugReport';
import MouseTrap from 'mousetrap';
import { useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import Chip from '@material-ui/core/Chip';
import { IInitialState } from '../../store/initial-state';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 40,
    width: '100%',
    maxWidth: 400,
    backgroundColor: theme.palette.background.paper
  },
  noColor: {
    backgroundColor: 'transparency'
  },
  inline: {
    display: 'inline',
  },
}));

function IssueList() {
  const classes = useStyles();
  const [itemSelected, setItemSelected] = React.useState<number>();
  const { loading, issues } = useSelector((state: IInitialState) => ({ loading: state.LOADING, issues: state.ISSUES_SELECTED }));

  const goDown = React.useCallback(() => {
    setItemSelected((prev) => {
      return typeof prev === 'undefined' || prev >= issues.length - 1 ? 0 : prev + 1;
    });
  }, [issues]);

  const goUp = React.useCallback(() => {
    setItemSelected((prev) => {
      return typeof prev === 'undefined' || prev >= issues.length || prev === 0 ? issues.length - 1 : prev - 1;
    });
  }, [issues]);

  const openIssue = React.useCallback((issue) => {
    window.open(issue.html_url);
  }, []);

  React.useEffect(
    () => {
      MouseTrap.bind('down', goDown);
      MouseTrap.bind('up', goUp);
      MouseTrap.bind('enter', () => {
        if (itemSelected) {
          openIssue(issues[itemSelected]);
        }
      });
      return () => {
        MouseTrap.unbind('down');
        MouseTrap.unbind('up');
        MouseTrap.unbind('enter');
      };
    },
    [goDown, goUp, openIssue, itemSelected, issues]
  );

  return (
    <List className={issues.length ? classes.root : classes.noColor}>
      {(loading && <Loader type='ThreeDots' color='#2BAD60' height={50} width={400} />) ||
        issues.map((issue, i) => (
          <ListItem button key={i} selected={itemSelected === i} onClick={() => openIssue(issue)}>
            <ListItemAvatar>
              <Avatar>
                <BugReportIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={issue.title} secondary={<>
              <span>Labels:</span>
              {issue.labels.map(({ name }, i) => <Chip key={i} variant='outlined' size='small' label={name} color={i % 2 === 0 ? 'primary' : 'secondary'} />)}
            </>} />
          </ListItem>
        ))}
    </List>
  );
}

export default IssueList;
