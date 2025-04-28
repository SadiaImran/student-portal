import { Link } from "react-router-dom";
import { calculateTotalCredits , totalCredits } from "../data/StudentData";
function StudentCard({ student }) {
const totalCreditsStudent = calculateTotalCredits(student);

  return (
    <div className="bg-fuchsia-200 shadow-md p-6 rounded-lg m-8">
      <h3 className="text-2xl font-bold">{student.name}</h3>
      <p className="text-gray-600 text-lg font-semibold mb-2">Registered Courses:</p>
      {student.courses.length > 0 ? (
        <ul className="list-disc list-inside text-gray-600 text-lg">
          {student.courses.map((course, index) => (
            <li key={index}>
              {course.courseName} - {course.credits} Credits
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No courses registered.</p>
      )}
      <p className="text-gray-800 font-bold mt-4">
        Total Credits: {totalCreditsStudent} / {totalCredits}
      </p>
    </div>
  );
}

export default StudentCard;
