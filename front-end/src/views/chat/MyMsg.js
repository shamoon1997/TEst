/* eslint-disable no-undef */
/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
import React from 'react';
import clsx from 'clsx';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Avatar
} from '@material-ui/core';
import getInitials from 'src/utils/getInitials';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 15,
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  avatar: {
    marginLeft: theme.spacing(2),
    alignSelf: 'flex-end'
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
    width: '100%',
    backgroundColor: 'rgb(199, 237, 252)'
  }
}));

const MyMsg = ({ content }) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root)}
      key={uuid()}
    >
      <div>
        <div className="my-content">{content.msg_content}</div>
        <div>{content.created_at}</div>
      </div>
      <Avatar
        className={classes.avatar}
        src={content.u_avatar ? `${global.serverUrl}upload/${content.u_avatar}` : null}
        alt="N"
      >
        {getInitials(content.clt_name)}
      </Avatar>
    </div>
  );
};

MyMsg.propTypes = {
  content: PropTypes.object
};

export default MyMsg;
