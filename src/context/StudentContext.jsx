import { createContext, useState } from "react";
import { students, registerCourse as registerCourseInData } from "../data/StudentData";
import { courses as initialCourses  , addCourse , deleteCourse} from "../data/CourseData";

export const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [allStudents, setStudents] = useState(students);
  const [courses, setCourses] = useState(initialCourses);
  const [loggedInStudent, setLoggedInStudent] = useState(null);
  const creditLimit = 15; // Set the maximum credit limit

  const loginStudent = (username, password) => {
    if (!students || students.length === 0) {
      throw new Error("No students available");
    }
    console.log("Students Array:", students);
    const student = students.find(
      (student) => student && student.username === username && student.password === password
    );
  
    if (!student) {
      throw new Error("Invalid credentials");
    }
  
    setLoggedInStudent(student);
  };

  const addCourseToContext = (name, credits) => {
    setCourses(addCourse(name, credits));
  };

  const deleteCourseFromContext = (courseId) => {
    setCourses(deleteCourse(courseId));
  };

  // const registerCourse = (studentId, course) => {
  //   registerCourseInData(studentId, course);
  //   setStudents([...students]);
  // };
  const registerCourse = (studentId, courseId) => {
    const student = allStudents.find((student) => student.id === studentId);
    if (!student) {
      throw new Error("Student not found");
    }

    const courseToRegister = courses.find((course) => course.id === courseId);
    if (!courseToRegister) {
      throw new Error("Course not found");
    }

    // Calculate total credits after adding the new course
    const totalCredits = student.courses.reduce(
      (total, course) => total + course.credits,
      0
    );

    if (totalCredits + courseToRegister.credits > creditLimit) {
      throw new Error("Credit limit exceeded. Cannot register for this course.");
    }

    // Check if the course is already registered
    const isAlreadyRegistered = student.courses.some(
      (registeredCourse) => registeredCourse.courseName === courseToRegister.name
    );

    if (isAlreadyRegistered) {
      throw new Error("Course already registered");
    }

    // Add the course to the student's courses
    student.courses.push({
      courseName: courseToRegister.name,
      credits: courseToRegister.credits,
    });

    // Update the students state
    setStudents((prevStudents) =>
      prevStudents.map((s) => (s.id === student.id ? { ...student } : s))
    );
    setLoggedInStudent({ ...student }); // Update the logged-in student
  };

  return (
    <StudentContext.Provider
      value={{
        allStudents,
        courses,
        loggedInStudent,
        loginStudent,
        registerCourse,
        addCourse: addCourseToContext,
        deleteCourse: deleteCourseFromContext,

      }}
    >
      {children}
    </StudentContext.Provider>
  );
}