import { initialState, courseReducer } from './courseReducer';
import { FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';
import { selectCourse, unSelectCourse } from '../actions/courseActionCreators';
import { fromJS } from 'immutable';

describe('tests for the courseReducer function', () => {
  it('should return an empty array when no actions are passed', () => {
    expect(courseReducer(initialState, {}).toJS()).toEqual({});
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
    const expected_data = {
      1: { credit: 60, id: 1, isSelected: false, name: 'ES6' },
      2: { credit: 20, id: 2, isSelected: false, name: 'Webpack' },
      3: { credit: 40, id: 3, isSelected: false, name: 'React' },
    };

    expect(courseReducer(initialState, fetchCourseSuccess()).toJS()).toEqual(
      expected_data
    );
  });

  it('should returns the data with the right item update with select course action', () => {
    const state = fromJS({
      1: { credit: 60, id: 1, isSelected: false, name: 'ES6' },
      2: { credit: 20, id: 2, isSelected: false, name: 'Webpack' },
      3: { credit: 40, id: 3, isSelected: false, name: 'React' },
    });
    const expected_data = {
      1: { credit: 60, id: 1, isSelected: false, name: 'ES6' },
      2: { credit: 20, id: 2, isSelected: true, name: 'Webpack' },
      3: { credit: 40, id: 3, isSelected: false, name: 'React' },
    };
    const action = selectCourse(2);
    expect(courseReducer(state, action).toJS()).toEqual(expected_data);
  });

  it('should returns the data with the right item update with unselect course action', () => {
    const state = fromJS({
      1: { credit: 60, id: 1, isSelected: false, name: 'ES6' },
      2: { credit: 20, id: 2, isSelected: true, name: 'Webpack' },
      3: { credit: 40, id: 3, isSelected: false, name: 'React' },
    });
    const expected_data = {
      1: { credit: 60, id: 1, isSelected: false, name: 'ES6' },
      2: { credit: 20, id: 2, isSelected: false, name: 'Webpack' },
      3: { credit: 40, id: 3, isSelected: false, name: 'React' },
    };
    const action = unSelectCourse(2);
    expect(courseReducer(state, action).toJS()).toEqual(expected_data);
  });
});
