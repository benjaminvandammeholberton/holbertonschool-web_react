import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

export const selectCourse = (index) => ({
  type: SELECT_COURSE,
  payload: index,
});

export const unSelectCourse = (index) => ({
  type: UNSELECT_COURSE,
  payload: index,
});
