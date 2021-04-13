/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

// ----------------------------------------------------------------------

function AuthProtect({ children }) {
  console.log(children);
  if (localStorage.getItem('brainaly_user')) {
    return true;
  }
  return false;
}
AuthProtect.propTypes = {
  children: PropTypes.node
};

export default AuthProtect;
