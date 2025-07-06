const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 58 },
  { name: "Charlie", grade: 95 },
  { name: "David", grade: 45 },
  { name: "Eva", grade: 72 },
];

function getTopStudent(students) {
  if (students.length === 0) return null; // Handle empty array
  return students.reduce((top, student) => 
    student.grade > top.grade ? student : top
  );
}

const topStudent = getTopStudent(students);
console.log(topStudent);