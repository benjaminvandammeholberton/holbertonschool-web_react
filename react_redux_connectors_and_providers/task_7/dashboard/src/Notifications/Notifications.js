import React, { Component } from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import {
  fetchNotifications,
  markAsread,
} from '../actions/notificationActionCreators';
import { connect } from 'react-redux';
import { getUnreadNotifications } from '../selectors/notificationSelector';
import { Map, fromJS } from 'immutable';

export class Notifications extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNotifications();
  }

  render() {
    const unreadNotifications = this.props.listNotifications;
    return (
      <>
        <div className="menuItem" onClick={this.props.handleDisplayDrawer}>
          Your notifications
        </div>
        {this.props.displayDrawer && (
          <div className="Notifications">
            <button
              style={{
                position: 'absolute',
                top: `10px`,
                right: '10px',
                border: 'none',
                background: 'none',
                fontSize: '1.5rem',
              }}
              aria-label="Close"
              onClick={this.props.handleHideDrawer}
            >
              &times;
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              {this.props.listNotifications.length === 0 ? (
                <li>No new notification for now</li>
              ) : (
                unreadNotifications.valueSeq().map((notification) => {
                  return (
                    <NotificationItem
                      key={notification.get('guid')}
                      type={notification.get('type')}
                      value={notification.get('value')}
                      html={notification.html}
                      handleClick={() =>
                        this.props.markNotificationAsRead(
                          notification.get('guid')
                        )
                      }
                      id={notification.get('guid')}
                    />
                  );
                })
              )}
            </ul>
          </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  fetchNotifications: PropTypes.func,
  markAsread: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  fetchNotifications: () => {},
  markNotificationAsRead: () => {},
};

const mapStateToProps = (state) => {
  return {
    listNotifications: getUnreadNotifications(fromJS(state.notifications)),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchNotifications: () => dispatch(fetchNotifications()),
  markNotificationAsRead: (index) => dispatch(markAsread(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
