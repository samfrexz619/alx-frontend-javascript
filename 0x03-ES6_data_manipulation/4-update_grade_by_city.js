const updateStudentGradeByCity = (students, city, newGrades) => {
  const filteredStudents = students.filter(
    (student) => student.location === city,
  );

  const studentGrades = filteredStudents.map((student) => {
    newGrades.forEach((gradeInfo) => {
      if (student.id === gradeInfo.studentId) {
        student.grade = gradeInfo.grade; // eslint-disable-line no-param-reassign
      }
    });
    if (student.grade === undefined) {
      student.grade = 'N/A'; // eslint-disable-line no-param-reassign
    }
    return student;
  });
  return studentGrades;
};

export default updateStudentGradeByCity;
