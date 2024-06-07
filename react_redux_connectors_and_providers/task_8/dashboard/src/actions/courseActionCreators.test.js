import {
  fetchCourses,
  selectCourse,
  unSelectCourse,
} from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { thunk } from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { Map } from 'immutable';
import fetchMock from 'fetch-mock';

describe('tests for selectCourse function', () => {
  it('should return the expected object when calling the function ', () => {
    const index = 1;
    const expectedReturn = { type: SELECT_COURSE, index: 1 };

    expect(selectCourse(index)).toStrictEqual(expectedReturn);
  });
});

describe('tests for UnSelectCourse function', () => {
  it('should return the expected object when calling the function ', () => {
    const index = 1;
    const expectedReturn = { type: UNSELECT_COURSE, index: 1 };

    expect(unSelectCourse(index)).toStrictEqual(expectedReturn);
  });
});

// describe('tests for fetchCourses function', () => {
//   const middlewares = [thunk];
//   const mockStore = configureMockStore(middlewares);
//   it('should fetch the data and set in the store', async () => {
//     const store = mockStore({});
//     fetchMock.get('http://192.168.1.192:8564/courses.json', {
//       status: 200,
//       body: [],
//     });
//     await store.dispatch(fetchCourses());
//     const actions = store.getActions();
//     expect(actions).toEqual([{ type: 'FETCH_COURSE_SUCCESS', data: [] }]);
//     fetchMock.restore();
//   });
// });
