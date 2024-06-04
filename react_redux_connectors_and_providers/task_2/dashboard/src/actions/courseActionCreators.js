import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  FETCH_COURSE_SUCCESS,
} from './courseActionTypes';

export const fetchCourseSuccess = (data) => ({
  type: FETCH_COURSE_SUCCESS,
  data,
});

export const selectCourse = (index) => ({
  type: SELECT_COURSE,
  index,
});

export const unSelectCourse = (index) => ({
  type: UNSELECT_COURSE,
  index,
});

export const boundSelectCourse = (index) => store.dispatch(selectCourse(index));
export const boundUnSelectCourse = (index) =>
  store.dispatch(unSelectCourse(index));
