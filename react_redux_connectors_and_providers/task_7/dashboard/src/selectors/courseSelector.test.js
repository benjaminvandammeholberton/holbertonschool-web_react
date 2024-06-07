import { Map, fromJS } from 'immutable';
import { setCourses } from '../actions/courseActionCreators';
import { courseReducer } from '../reducers/courseReducer';
import { getAllCourses } from './courseSelector';

describe('tests suite for courseSelector', () => {
  it('should return the expected data', () => {
    const initialState = {
      courses: fromJS({}),
    };
    const data = [
      { id: '1', name: 'ES6', credit: 60 },
      { id: '2', name: 'Webpack', credit: 20 },
      { id: '3', name: 'React', credit: 40 },
    ];
    const expectedData = [
      { id: '1', name: 'ES6', credit: 60, isSelected: false },
      { id: '2', name: 'Webpack', credit: 20, isSelected: false },
      { id: '3', name: 'React', credit: 40, isSelected: false },
    ];
    const action = setCourses(data);
    initialState.courses = courseReducer(undefined, action);
    const stateReduce = getAllCourses(fromJS(initialState));
    expect(stateReduce).toEqual(expectedData);
  });
});
