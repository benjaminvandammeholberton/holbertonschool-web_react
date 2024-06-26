import { Map } from 'immutable';

import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';

export const initialState = Map({});

export const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS: {
      const normalizeData = coursesNormalizer(action.data);
      Object.keys(normalizeData.entities.courses).forEach((id) => {
        normalizeData.entities.courses[id].isSelected = false;
      });
      return initialState.merge(Map(normalizeData.entities.courses));
    }

    case SELECT_COURSE: {
      return state.setIn([action.index, 'isSelected'], true);
    }

    case UNSELECT_COURSE: {
      return state.setIn([action.index, 'isSelected'], false);
    }

    default: {
      return state;
    }
  }
};
