import { useContext, useState } from "react";
import { StudentContext } from "../../context/StudentContext";
import Header from "../../components/Header";

function ManageCourses() {
  const { courses, addCourse, deleteCourse } = useContext(StudentContext);
  const [courseName, setCourseName] = useState("");
  const [courseCredits, setCourseCredits] = useState("");
  const [courseId, setCourseId] = useState("");

  const handleAddCourse = (e) => {
    e.preventDefault();
    addCourse(courseName, courseCredits);
    setCourseName("");
    setCourseCredits("");
  };
  const hanldeDeleteCourse = (e) => {
    e.preventDefault();
    deleteCourse(courseId);
    setCourseId("");
    setCourseName("");
    setCourseCredits("");
  };

  return (
    <div>
      <Header userType={"admin"}></Header>
      <h1 className="text-3xl font-bold p-6">Manage Courses</h1>
      <div className="flex  items-center justify-start gap-14 p-6">
        <form onSubmit={handleAddCourse} className="flex flex-col gap-10">
            <input
            type="text"
            placeholder="Course Name"
            value={courseName}
            className="p-2 border-2 border-purple-300 rounded-lg w-64"
        
            onChange={(e) => setCourseName(e.target.value)}
            />
            <input
            type="number"
            placeholder="Credits"
            value={courseCredits}
            className="p-2 border-2 border-purple-300  rounded-lg w-64"
        
            onChange={(e) => setCourseCredits(e.target.value)}
            />
            <button
            type="submit"
            className=
                {`bg-green-500 text-white font-semibold  text-lg py-3 rounded-xl border-2 hover:text-green-500
                hover:border-green-500  hover:bg-slate-100 transition duration-300 ease-in-out`}
            >Add Course</button>
        </form>
        <div className="w-2 bg-purple-500 h-80"></div>
        <form onSubmit={hanldeDeleteCourse} className="flex flex-col gap-10">
            <input
            type="text"
            placeholder="Course Id"
            value={courseId}
            className="p-2 border-2 border-purple-300  rounded-lg w-64"
            onChange={(e) => setCourseId(e.target.value)}
            />
           
        <button
            type="submit"
            className=
                {`bg-red-500 text-white font-semibold text-lg py-3 rounded-xl border-2 hover:text-red-500
                hover:border-red-500  hover:bg-slate-100 transition duration-300 ease-in-out`}
            >Delete Course</button>
        </form>
        <div className="w-2 bg-purple-500 h-80"></div>
        <div className="grid grid-cols-4 gap-6"> 
        {courses.map((course) => (
          <div key={course.id} className="border-2 border-fuchsia-300 text-black bg-slate-50shadow-md p-6 rounded-lg">
            {course.id} - {course.name} - {course.credits} Credits
          </div>
        ))}
        </div>       
      </div>
     
      
    </div>
  );
}

export default ManageCourses;