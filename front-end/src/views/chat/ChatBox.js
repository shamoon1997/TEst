/* eslint-disable no-undef */
/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
// import { NavLink as RouterLink } from 'react-router-dom';
import {
  Card,
  makeStyles,
} from '@material-ui/core';

import CustomerMsg from './CustomerMsg';
import MyMsg from './MyMsg';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 15,
    minHeight: 700
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  item: {
    marginBottom: 20
  },
  userItem: {
    display: 'flex',
    justifyContent: 'left',
  },
  selectedItem: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'rgb(199, 237, 252)'
  }
}));

const ChatBox = ({ MsgContent }) => {
  const classes = useStyles();
  const [profile, setProfile] = React.useState('');
  React.useEffect(() => {
    const currentUser = localStorage.getItem('brainaly_user');
    const userObject = JSON.parse(currentUser);
    setProfile(userObject);
  }, []);

  return (
    <Card
      className={clsx(classes.root, 'message-box')}
      key={uuid()}
    >
      {
        MsgContent.map((msg) => {
          return (
            profile.userId == msg.from_id ? <MyMsg content={msg} /> : <CustomerMsg content={msg} />
          );
        })
      }
    </Card>
  );
};

ChatBox.propTypes = {
  MsgContent: PropTypes.object,
};

export default ChatBox;
