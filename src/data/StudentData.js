export const students = [
    {id : 1 , username: "a", password: "123" ,
     courses : [
        // {courseName: "Math", credits: 3}, 
        // {courseName: "Physics", credits: 4}
    ]},
    {id:2 , username: "b", password: "123" , 
     courses : [
        // {courseName: "Chemistry", credits: 3}, 
        // {courseName: "Biology", credits: 4}
     ]}]; 

export const totalCredits = 15 ;
export const addStudent = (username, password) => {
  students.push({ id:students.length+1, username, password , courses: []});
  return students;
};

export const validateStudent = (username, password) => {
  return students.some(
    (student) => student.username === username && student.password === password
  );
};

export const calculateTotalCredits = (student) => {
  return student.courses.reduce((total, course) => total + course.credits, 0);
};

export const registerCourse = (studentId, course) => {
  const student = students.find((student) => student.id === studentId);
  if (!student) {
    throw new Error("Student not found");
  }

  // Check if the course is already registered
  const isAlreadyRegistered = student.courses.some(
    (registeredCourse) => registeredCourse.courseName === course.courseName
  );

  if (isAlreadyRegistered) {
    throw new Error("Course already registered");
  }

  // Add the course to the student's courses
  student.courses.push(course);
};