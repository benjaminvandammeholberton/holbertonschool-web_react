import React, { Component } from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import { fetchNotifications } from '../actions/notificationActionCreators';
import { connect } from 'react-redux';
import { valueSeq } from 'immutable';

export class Notifications extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNotifications();
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
                Object.values(this.props.listNotifications).map(
                  (notification) => {
                    return (
                      <NotificationItem
                        key={notification.guid}
                        type={notification.type}
                        value={notification.value}
                        html={notification.html}
                        handleClick={() =>
                          this.props.markNotificationAsRead(notification.id)
                        }
                        id={notification.id}
                      />
                    );
                  }
                )
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
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  fetchNotifications: () => {},
};

const mapStateToProps = (state) => ({
  listNotifications: state.notifications.get('messages'),
});

const mapDispatchToProps = (dispatch) => ({
  fetchNotifications: () => dispatch(fetchNotifications()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
