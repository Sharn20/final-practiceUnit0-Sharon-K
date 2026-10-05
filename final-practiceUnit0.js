// ========================================
// 1. VALUES, DATA TYPES, AND OPERATIONS
// ========================================
// Pseudocode:
// Store a student's name, class and grade.
// Convert the grade from a string to a number.
// Print the student's information.
let studentName = "Sharon";
let studentClass = "Math";
let grade = "90";
grade = Number(grade);
console.log( studentName); // Output Expected: Sharon
console.log(studentClass); // Output Expected: Math
console.log(grade); // Output Expected: 90

// ========================================
// 2. STRINGING CHARACTERS TOGETHER
// ========================================

// Pseudocode:
// Store a student's name and class.
// Create a personalized welcome message.
// Print the message.
 studentName = "Scolah";
let className = "JavaScript";
console.log(`Welcome ${studentName}! You are enrolled in ${className}.`); // Output Expected: Welcome Scolah! You are enrolled in JavaScript.

// ========================================
// 3. CONTROL STRUCTURES AND LOGIC
// ========================================

// Pseudocode:
// Store a student's grade.
// Check whether the student is passing.
// Print the appropriate message.
 grade = 80;
if (grade >= 70) {
    console.log("Student is passing."); // Output Expected: Student is passing.
} else {
    console.log("Student is not passing."); // Output Expected: Student is not passing.
}

// ========================================
// 4. BUILDING ARRAYS
// ========================================

// Pseudocode:
// Create an array containing student names.
// Print the array.
let students = ["Samia", "Levi", "Norah"];
console.log(students); // Output Expected: ["Samia", "Levi", "Norah"]
let classrooms =  [
    ["Ruth", "Leo"],
    ["Abby", "Randy"]
];
console.log(classrooms); // Output Expected: [["Ruth", "Leo"], ["Abby", "Randy"]]

// ========================================
// 5. USING ARRAYS
// ========================================

// Pseudocode:
// Find a student in the student array.
// Print the student if they are found.
students = ["Sharon", "Mercy", "Mary"];
let student = students.find(student => student === "Mercy");
console.log(student); // Output Expected: Mercy
let studentIndex = students.findIndex(student => student === "Mercy");
console.log(studentIndex); // Output Expected: 1
// ========================================
// 6. WORKING WITH LOOPS
// ========================================

// Pseudocode:
// Go through each student in the array.
// Print each student's name.
students = ["Joan", "John", "Joy"];
for (let student of students) {
    console.log(student); // Output Expected: Joan, John, Joy (each on a new line)
}

