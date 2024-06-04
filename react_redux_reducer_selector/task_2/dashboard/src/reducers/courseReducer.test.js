import { initialState, courseReducer } from './courseReducer';
import { FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';
import { selectCourse, unSelectCourse } from '../actions/courseActionCreators';

describe('tests for the courseReducer function', () => {
  it('should return an empty array when no actions are passed', () => {
    expect(courseReducer(initialState, {})).toEqual([]);
  });

  it('should returns the right data when calling FETCH_COURSE_SUCCESS', () => {
    const data = [
      {
        id: 1,
        name: 'ES6',
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        credit: 40,
      },
    ];
    const fetchCourseSuccess = () => {
      return {
        type: FETCH_COURSE_SUCCESS,
        data,
      };
    };
    const expected_data = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];

    expect(courseReducer(initialState, fetchCourseSuccess())).toEqual(
      expected_data
    );
  });

  it('should returns the data with the right item update with select course action', () => {
    const state = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];
    const expected_data = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: true,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];
    const action = selectCourse(2);
    expect(courseReducer(state, action)).toEqual(expected_data);
  });

  it('should returns the data with the right item update with unselect course action', () => {
    const state = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: true,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];
    const expected_data = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];
    const action = unSelectCourse(2);
    expect(courseReducer(state, action)).toEqual(expected_data);
  });
});
