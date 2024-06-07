import React, { useEffect } from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';
import {
  fetchCourses,
  selectCourse,
  unSelectCourse,
} from '../actions/courseActionCreators';
import { getAllCourses } from '../selectors/courseSelector';
import { connect } from 'react-redux';

export const CourseList = ({
  fetchCourses,
  listCourses,
  unSelectCourse,
  selectCourse,
}) => {
  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  const onChangeRow = (id, checked) => {
    if (checked) {
      unSelectCourse(id);
    } else {
      selectCourse(id);
    }
  };
  return (
    <table>
      <thead>
        <CourseListRow isHeader textFirstCell="Available courses" />
        <CourseListRow
          isHeader
          textFirstCell="Course name"
          textSecondCell="Credit"
        />
      </thead>
      <tbody>
        {listCourses?.length === 0 ? (
          <CourseListRow textFirstCell="No course available" />
        ) : (
          listCourses?.map((course) => {
            return (
              <CourseListRow
                key={course.id}
                textFirstCell={course.name}
                textSecondCell={course.credit}
                isChecked={course.isSelected}
                onChangeRow={() => onChangeRow(course.id, course.isSelected)}
              />
            );
          })
        )}
      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => ({
  listCourses: getAllCourses(state.courses),
});

const mapDispatchToProps = (dispatch) => ({
  fetchCourses: () => dispatch(fetchCourses()),
  selectCourse: (id) => dispatch(selectCourse(id)),
  unSelectCourse: (id) => dispatch(unSelectCourse(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
