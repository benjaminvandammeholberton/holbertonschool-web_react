import React from 'react';
import { getFooterCopy, getFullYear } from '../utils/utils';
import './Footer.css';
import { connect } from 'react-redux';

export const Footer = (props) => {
  const currentYear = getFullYear();
  const footerCopy = getFooterCopy(false);
  return (
    <footer className="App-footer">
      <p>
        Copyright {currentYear} - {footerCopy}
      </p>
      {props.user && <p>Contact us</p>}
    </footer>
  );
};

export const mapStateToProps = (state) => {
  return {
    user: state.ui.get('user'),
  };
};

export default connect(mapStateToProps)(Footer);
