export const getAllCourses = (state) => {
  if (state) {
    return state.valueSeq().toArray();
  }
  return state;
};
