const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 58 },
  { name: "Charlie", grade: 95 },
  { name: "David", grade: 45 },
  { name: "Eva", grade: 72 },
];

const studentStrings = students.map(student => `${student.name}: ${student.grade}`);
console.log(studentStrings);