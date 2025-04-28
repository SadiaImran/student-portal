import { Link , Navigate , useNavigate} from "react-router-dom";

function Header({ userType}) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <header className="bg-purple-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Student Portal - {userType}</h1>
      <nav className="flex gap-8 justify-center items-center">
        {userType === "admin" ? (
          // Admin Navigation
          <>
            <Link to="/admin/students" className="hover:underline text-xl font-bold">
              View All Students
            </Link>
            <Link to="/admin/manage-courses" className="hover:underline text-xl font-bold">
              Manage Courses
            </Link>
          </>
        ) : userType === "student" ? (
          // Student Navigation
          <>
            <Link to="/courses" className="hover:underline text-xl font-bold">Register Course</Link>
            <Link to="/view-courses" className="hover:underline text-xl font-bold">View Registered Courses</Link>
          </>
        ) : (
          // Default page open
          <Link to="" className="hover:underline text-xl font-bold">
            Login
          </Link>
        )}
        {userType && (
          <button
            onClick={handleLogout}
            className="bg-white text-purple-500 text-xl font-bold px-8 py-2 rounded-full"
          >
            Logout
          </button>
        )}
      </nav>
    </header>
  );
}

export default Header;
