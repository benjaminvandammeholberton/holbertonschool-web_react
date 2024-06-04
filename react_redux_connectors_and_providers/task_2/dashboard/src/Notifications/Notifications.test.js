import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Tests for Notifications componenet when no prop are passed', () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Notifications />)));

  it('should render without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render only the Div.menuItem with the text "Your notifications"', () => {
    expect(wrapper.children().length).toBe(1);
    expect(wrapper.find('.menuItem').text()).toBe('Your notifications');
  });
});

describe('Tests for Notifications componenet when displayDrawer is set to true', () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Notifications displayDrawer />)));

  it('should render without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render Div.menuItem and Div.Notifications"', () => {
    expect(wrapper.find('div').length).toBe(2);
    expect(wrapper.find('.menuItem').text()).toBe('Your notifications');
  });

  it('should render a list with one li with the text "No new notification for now"', () => {
    expect(wrapper.find('li').length).toBe(1);
    expect(wrapper.find('li').text()).toBe('No new notification for now');
  });
});

describe('Tests for Notifications componenet when displayDrawer is set to true and an empty array is passed to listNotifications', () => {
  let wrapper;

  beforeEach(
    () =>
      (wrapper = shallow(
        <Notifications displayDrawer listNotifications={[]} />
      ))
  );

  it('should render without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render Div.menuItem and Div.Notifications"', () => {
    expect(wrapper.find('div').length).toBe(2);
    expect(wrapper.find('.menuItem').text()).toBe('Your notifications');
  });

  it('should render a list with one li with the text "No new notification for now"', () => {
    expect(wrapper.find('li').length).toBe(1);
    expect(wrapper.find('li').text()).toBe('No new notification for now');
  });
});

describe('Tests for Notifications componenet when displayDrawer is set to true and data array is passed to listNotifications', () => {
  const notificationData = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    {
      id: 3,
      type: 'urgent',
      html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' },
    },
  ];

  let wrapper;

  beforeEach(
    () =>
      (wrapper = shallow(
        <Notifications displayDrawer listNotifications={notificationData} />
      ))
  );

  it('should render without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render Div.menuItem and Div.Notifications"', () => {
    expect(wrapper.find('div').length).toBe(2);
    expect(wrapper.find('.menuItem').text()).toBe('Your notifications');
  });

  it('should render a list with one li with three NotificationItem', () => {
    expect(wrapper.find(NotificationItem).length).toBe(3);
  });

  it('should render the text Here is the list of notifications', () => {
    expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
  });

  it('should render the right html for the first NotificationItem', () => {
    expect(wrapper.find(NotificationItem).first().html()).toBe(
      '<li data-notification-type="default">New course available</li>'
    );
  });

  it('should verify that when updating the props of the component with the same list, the component doesn’t rerender', () => {
    const renderSpy = jest.spyOn(wrapper.instance(), 'render');
    wrapper.setProps({ listNotifications: notificationData });
    expect(renderSpy).toHaveBeenCalled();
    renderSpy.clearAllMocks;
  });

  it('should verify that when updating the props of the component with the longer list, the component rerender', () => {
    const renderSpy = jest.spyOn(wrapper.instance(), 'render');
    const notificationDataUpdated = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      {
        id: 3,
        type: 'urgent',
        html: {
          __html: '<strong>Urgent requirement</strong> - complete by EOD',
        },
      },
      {
        id: 4,
        type: 'urgent',
        html: {
          __html: '<strong>Urgent requirement</strong> - complete by EOD',
        },
      },
    ];
    wrapper.setProps({ listNotifications: notificationDataUpdated });
    expect(renderSpy).toHaveBeenCalled();
    renderSpy.clearAllMocks;
  });
});

describe('Tests for display or hide the notifications drawer', () => {
  it('checks that clicking on the menu item calls handleDisplayDrawer', () => {
    const handleDisplayDrawer = jest.fn();
    const wrapper = shallow(
      <Notifications handleDisplayDrawer={handleDisplayDrawer} />
    );
    const menuItem = wrapper.find('div.menuItem');
    menuItem.simulate('click');
    expect(handleDisplayDrawer).toHaveBeenCalledTimes(1);
    handleDisplayDrawer.mockClear();
  });
  it('checks that clicking on the button calls handleHideDrawer', () => {
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(
      <Notifications displayDrawer={true} handleHideDrawer={handleHideDrawer} />
    );
    const button = wrapper.find('button');
    button.simulate('click');
    expect(handleHideDrawer).toHaveBeenCalledTimes(1);
    handleHideDrawer.mockClear();
    jest.restoreAllMocks();
  });
});
