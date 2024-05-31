import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

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
