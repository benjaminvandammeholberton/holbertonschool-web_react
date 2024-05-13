import React, { Component } from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import { NotificationItemShape } from './NotificationItemShape';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.displayDrawer !== nextProps.displayDrawer) return true;
    if (
      nextProps.listNotifications.length > this.props.listNotifications.length
    ) {
      return true;
    }
    return false;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
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
                this.props.listNotifications.map((notification) => {
                  return (
                    <NotificationItem
                      key={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      handleClick={this.markAsRead}
                      id={notification.id}
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
  listNotifications: PropTypes.arrayOf(PropTypes.shape(NotificationItemShape)),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

export default Notifications;
