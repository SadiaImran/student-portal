import { useContext } from "react";
import { StudentContext } from "../../context/StudentContext";
import Header from "../../components/Header";

function CourseRegistration() {
  const { loggedInStudent, registerCourse, courses } = useContext(StudentContext);

  const handleRegister = (courseId) => {
    if (!loggedInStudent) {
      alert("You must be logged in to register for a course.");
      return;
    }
    try {
      registerCourse(loggedInStudent.id, courseId);
      alert("Course registered successfully!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <Header userType={"student"} />
      <h2 className="text-2xl font-bold mb-4 p-6">Course Registration - Available Courses</h2>
      <div className="grid grid-cols-2 gap-6 p-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="border-2 flex items-center justify-between border-green-300 text-black bg-slate-50 shadow-md p-6 rounded-lg"
          >
            <span>
              {course.id} - {course.name} - {course.credits} Credits
            </span>
            <button
              onClick={() => handleRegister(course.id)}
              className={`bg-green-500 text-white font-semibold text-lg py-3 px-4 rounded-xl border-2 hover:text-green-500 hover:border-green-500 hover:bg-slate-100 transition duration-300 ease-in-out`}
            >
              Register Course
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseRegistration;