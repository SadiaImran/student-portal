export const courses = [
  { id: 1, name: "Math", credits: 3 },
  { id: 2, name: "Physics", credits: 4 },
  { id: 3, name: "Chemistry", credits: 3 },
];

export const addCourse = (name, credits) => {
  const newCourse = {
    id: courses.length + 1, 
    name,
    credits: parseInt(credits, 10),
  };
  courses.push(newCourse);
  return courses
};

export const deleteCourse = (courseId) => {
    return courses.filter((course) => course.id !== parseInt(courseId, 10)); // Return a new array without the deleted course

};

export const getCourseById = (courseId) => {
  return courses.find((course) => course.id === courseId);
};