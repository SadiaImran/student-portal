import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import AdminLogin from "./pages/login/AdminLogin";
import StudentLogin from "./pages/login/StudentLogin"; 
import AdminPage from "./pages/admin/AdminPage";
import ViewAllStudents from "./pages/admin/ViewAllStudents";
import ManageCourses from "./pages/admin/ManageCourses";
import { StudentProvider } from "./context/StudentContext";
import StudentPage from "./pages/student/StudentPage.jsx";
import CourseRegistration from "./pages/student/CourseRegistration.jsx";
import ViewRegisteredCourses from "./pages/student/ViewRegisteredCourses.jsx";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <h1 className="text-4xl font-bold mb-8">Student Portal</h1>
      <div className="flex justify-between items-center gap-6">
        <button
          onClick={() => navigate("/login-admin")}
          className="bg-purple-500 text-white px-6 py-3 rounded-lg shadow-xl text-xl"
        >
          Login as Admin
        </button>
        <button
          onClick={() => navigate("/login-student")}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-xl text-xl"
        >
          Login as Student
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <StudentProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login-admin" element={<AdminLogin />} />
        <Route path="/login-student" element={<StudentLogin />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/students" element={<ViewAllStudents />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/admin/manage-courses" element={<ManageCourses/>}></Route>
        <Route path="/courses" element={<CourseRegistration/>}></Route>
        <Route path="/view-courses" element={<ViewRegisteredCourses/>}></Route>
      </Routes>
    </Router>
    </StudentProvider>
  );
}

export default App;
