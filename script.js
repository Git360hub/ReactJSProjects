const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 58 },
  { name: "Charlie", grade: 95 },
  { name: "David", grade: 45 },
  { name: "Eva", grade: 72 },
];

const total = students.reduce((sum, student) => sum + student.grade, 0);
const average = total / students.length;
const roundedAverage = average.toFixed(2);

console.log(roundedAverage);