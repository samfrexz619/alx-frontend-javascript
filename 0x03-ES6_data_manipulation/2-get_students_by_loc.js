const getStudentsByLocation = (students, city) => {
  const filteredItems = [];
  students.filter((student) => student.location === city && filteredItems.push(student));
  return filteredItems;
};

export default getStudentsByLocation;
