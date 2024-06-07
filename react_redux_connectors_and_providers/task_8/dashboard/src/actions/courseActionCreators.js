import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  FETCH_COURSE_SUCCESS,
} from './courseActionTypes';

export const setCourses = (data) => ({
  type: FETCH_COURSE_SUCCESS,
  data,
});

export const selectCourse = (index) => {
  return {
    type: SELECT_COURSE,
    index,
  };
};

export const unSelectCourse = (index) => ({
  type: UNSELECT_COURSE,
  index,
});

export const fetchCourses = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://192.168.1.192:8564/courses.json');
      const data = await response.json();
      dispatch(setCourses(data));
    } catch (error) {
      console.error(error);
    }
  };
};
