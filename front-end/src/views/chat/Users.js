/* eslint-disable no-undef */
/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
// import { NavLink as RouterLink } from 'react-router-dom';
import {
  Avatar,
  Card,
  Typography,
  makeStyles,
  Button
} from '@material-ui/core';
import getInitials from 'src/utils/getInitials';
import global from 'src/utils/global';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 15
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
    width: '100%'
  },
  selectedItem: {
    display: 'flex',
    justifyContent: 'left',
    width: '100%',
    backgroundColor: 'rgb(199, 237, 252)'
  }
}));

const Users = ({
  className, selectedUser, toUser, customers, ...rest
}) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      {
        customers.map((customer) => {
          return (
            <Button
              activeClassName={classes.active}
              className={selectedUser == customer.u_id ? classes.selectedItem : classes.userItem}
              key={Math.random() * 100}
              onClick={() => { toUser(customer.u_id); }}
            >
              <Avatar
                className={classes.avatar}
                src={customer.u_avatar ? `${global.serverUrl}upload/${customer.u_avatar}` : null}
                alt="N"
              >
                {getInitials(customer.u_name)}
              </Avatar>
              <Typography
                color="textPrimary"
                variant="body1"
              >
                {customer.u_name}
              </Typography>
            </Button>
          );
        })
      }

    </Card>
  );
};

Users.propTypes = {
  className: PropTypes.string,
  customers: PropTypes.array.isRequired,
  selectedUser: PropTypes.number,
  toUser: PropTypes.func
};

export default Users;
