import { useContext } from "react";
import { StudentContext } from "../../context/StudentContext";
import Header from "../../components/Header";

function ViewAllStudents() {
  const { allStudents } = useContext(StudentContext);

  return (
    <div className="bg-gray-200 min-h-screen">
      <Header userType={"admin"} />
      <h2 className="text-2xl font-bold mb-4 p-6">All Students</h2>
      <div className="grid grid-cols-1 gap-6 p-6">
        {allStudents.map((student) => (
          <div
            key={student.id}
            className="border-2 border-purple-300 text-black bg-slate-50 shadow-md p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold">{student.username}</h3>
            <p className="text-gray-600">Registered Courses:</p>
            {student.courses.length > 0 ? (
              <ul className="list-disc list-inside">
                {student.courses.map((course, index) => (
                  <li key={index}>
                    {course.courseName} - {course.credits} Credits
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No courses registered.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewAllStudents;