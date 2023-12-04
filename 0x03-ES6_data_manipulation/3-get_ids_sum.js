const getStudentIdsSum = (students) => {
  const studentIds = students.map((student) => student.id);
  const initialVal = 0;
  const studentIdsSum = studentIds.reduce((acc, currVal) => acc + currVal, initialVal);
  return studentIdsSum;
};

export default getStudentIdsSum;
