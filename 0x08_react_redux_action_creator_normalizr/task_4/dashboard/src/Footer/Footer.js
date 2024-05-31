import React from 'react';
import { getFooterCopy, getFullYear } from '../utils/utils';
import './Footer.css';
import AppContext from '../App/AppContext';

const Footer = () => {
  const currentYear = getFullYear();
  const footerCopy = getFooterCopy(false);
  return (
    <AppContext.Consumer>
      {(value) => (
        <footer className="App-footer">
          <p>
            Copyright {currentYear} - {footerCopy}
          </p>
          {value.user.isLoggedIn && <p>Contact us</p>}
        </footer>
      )}
    </AppContext.Consumer>
  );
};

export default Footer;
