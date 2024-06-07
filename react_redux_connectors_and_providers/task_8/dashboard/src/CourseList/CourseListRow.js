import React from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({
  isHeader = false,
  textFirstCell,
  textSecondCell = null,
  isChecked = false,
  onChangeRow = () => {},
}) => {
  return (
    <>
      {isHeader ? (
        textSecondCell === null ? (
          <tr>
            <th colSpan={2}>{textFirstCell}</th>
          </tr>
        ) : (
          <tr>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </tr>
        )
      ) : (
        <tr className={isChecked ? 'rowCkecked' : ''}>
          <td>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={onChangeRow}
            ></input>
            {textFirstCell}
          </td>
          <td>{textSecondCell}</td>
        </tr>
      )}
    </>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isChecked: PropTypes.bool,
  onChangeRow: PropTypes.func,
};

export default CourseListRow;
