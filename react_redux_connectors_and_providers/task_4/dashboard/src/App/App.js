import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import './App.css';
import { getLatestNotifications } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import WithLogging from '../HOC/WithLogging';
import { connect } from 'react-redux';
import {
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest,
  logout,
} from '../actions/uiActionCreators';

const coursesData = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

const notificationData = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotifications() } },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listNotifications: notificationData,
    };
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  markNotificationAsRead(id) {
    const listNotification = [...this.state.listNotifications];
    const listNotificationUpdated = listNotification.filter(
      (notif) => notif.id !== id
    );
    this.setState({ listNotifications: listNotificationUpdated });
  }

  handleKey = (e) => {
    if (e.ctrlKey && e.key == 'h') {
      alert('Logging you out');
      this.props.logout();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKey);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKey);
  }

  render() {
    return (
      <>
        <WithLogging>
          <Notifications
            displayDrawer={this.props.displayDrawer}
            handleHideDrawer={this.props.hideNotificationDrawer}
            handleDisplayDrawer={this.props.displayNotificationDrawer}
            listNotifications={this.state.listNotifications}
            markNotificationAsRead={this.markNotificationAsRead}
          />
        </WithLogging>
        <div className="App">
          <Header />
          {!this.props.isLoggedIn ? (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login logIn={this.props.login} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nec sem vel nulla tristique commodo. Nam consequat luctus elit,
              eget feugiat velit ultrices quis. Integer ullamcorper, sapien sit
              amet malesuada consequat, libero quam ultricies mi, eget lacinia
              felis mauris sed ipsum.
            </p>
          </BodySection>
          <Footer />
        </div>
      </>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.ui.get('isUserLoggedIn'),
    displayDrawer: state.ui.get('isNotificationDrawerVisible'),
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    displayNotificationDrawer: () => dispatch(displayNotificationDrawer()),
    hideNotificationDrawer: () => dispatch(hideNotificationDrawer()),
    login: (email, password) => dispatch(loginRequest(email, password)),
    logout: () => dispatch(logout()),
  };
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
  login: PropTypes.func,
  logout: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
  login: () => {},
  logout: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

export { App };
