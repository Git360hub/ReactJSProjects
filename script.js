const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 58 },
  { name: "Charlie", grade: 95 },
  { name: "David", grade: 45 },
  { name: "Eva", grade: 72 },
];

students.forEach(student => {
  student.status = student.grade >= 60 ? "pass" : "fail";
});

console.log(students);