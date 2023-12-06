interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'samfrexz',
  lastName: 'frexzy',
  age: 6,
  location: 'ghana'
}

const student2: Student = {
  firstName: 'Dave',
  lastName: 'Seun',
  age: 25,
  location: 'Lagos'
}

const studentsList: Student[] = [ student1, student2];

export const renderTable = (studentsList: Student[]): void =>  {

  const table = document.createElement('table');
  const headerRow = document.createElement('tr');
  table.insertAdjacentElement('beforeend', headerRow);

  // insert headers
  headerRow.insertAdjacentHTML('beforeend', '<th>FirstName</th>');
  headerRow.insertAdjacentHTML('beforeend', '<th>Location</th>');

  for (const student of studentsList) {
    const studentRow = document.createElement('tr')
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    table.insertAdjacentElement('beforeend', studentRow);
  }

  document.body.insertAdjacentElement('beforeend', table);
}

renderTable(studentsList);