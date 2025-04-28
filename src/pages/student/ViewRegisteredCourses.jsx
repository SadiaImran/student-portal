import { useContext } from "react";
import { StudentContext } from "../../context/StudentContext";
import Header from "../../components/Header";

function ViewRegisteredCourses() {
  const { loggedInStudent } = useContext(StudentContext);

  if (!loggedInStudent) {
    return <p>You must be logged in to view your registered courses.</p>;
  }

  return (
    <div className="bg-gray-200 min-h-screen">
      <Header userType={"student"} />
      <h2 className="text-2xl font-bold mb-4 p-6">Your Registered Courses</h2>
      <div className="grid grid-cols-2 gap-6 p-6">
        {loggedInStudent.courses.length > 0 ? (
          loggedInStudent.courses.map((course, index) => (
            <div
              key={index}
              className="border-2 border-blue-300 text-black bg-slate-50 shadow-md p-6 rounded-lg"
            >
              <span>
                {course.courseName} - {course.credits} Credits
              </span>
            </div>
          ))
        ) : (
          <p className="text-gray-600">You have not registered for any courses yet.</p>
        )}
      </div>
    </div>
  );
}

export default ViewRegisteredCourses;