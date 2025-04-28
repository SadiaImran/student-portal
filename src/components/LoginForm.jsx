import { useState, useRef, useEffect , useContext } from "react";
import { useNavigate } from "react-router-dom";
import { validateStudent, addStudent } from "../data/StudentData";
import { StudentContext } from "../context/StudentContext";
function LoginForm({ userType, redirectPath }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newStudent, setNewStudent] = useState(false);
  const usernameErrorRef = useRef(null);
  const passwordErrorRef = useRef(null);
  const [successNewUser, setSuccessNewUser] = useState(false);
  const navigate = useNavigate();
  const { loginStudent } = useContext(StudentContext);

  const handleLogin = (e) => {
    e.preventDefault();

    // Clear previous error messages
    usernameErrorRef.current.textContent = "";
    passwordErrorRef.current.textContent = "";

    if (userType === "Admin") {
      if (username === "admin" && password === "admin123") {
        console.log("Navigating to:", redirectPath);
        navigate(redirectPath);
      } else {
        usernameErrorRef.current.textContent = "Invalid username or password!";
      }
    } else if (userType === "Student") {
      console.log("Validating student:", username, password);
      if (validateStudent(username, password)) {
        loginStudent(username, password);
        console.log("Student logged in:", username, password);
        console.log("Navigating to:", redirectPath);
        navigate(redirectPath);
      } else {
        usernameErrorRef.current.textContent = "Invalid username or password!";
      }
    }
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();

    if (username && password) {
      addStudent(username, password);
      console.log("Student added:", username, password);
      setSuccessNewUser(true);
      setUsername("");
      setPassword("");
      usernameErrorRef.current.textContent = "";  
      passwordErrorRef.current.textContent = "";    
    } else {
      if (!username) {
        usernameErrorRef.current.textContent = "Username cannot be empty!";
      } else if (username.trim().length < 3) {
        usernameErrorRef.current.textContent = "Username length can't be less than 3!";
      } else if (/\d/.test(username)) {
        usernameErrorRef.current.textContent = "Username cannot contain digits!";
      }

      if (!password) {
        passwordErrorRef.current.textContent = "Password cannot be empty!";
      } else if (password.trim().length < 3) {
        passwordErrorRef.current.textContent = "Password length can't be less than 3!";
      }
    }
  };

  const handleNewStudentClick = (e) => {
    e.preventDefault();
    setUsername("");
    setPassword("");
    setNewStudent(true);
  };

  useEffect(() => {
    if (successNewUser) {
      const timer = setTimeout(() => {
        setSuccessNewUser(false);
        setNewStudent(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [successNewUser]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <h1 className="text-3xl font-bold mb-6">{userType} Login</h1>
      {successNewUser && (
        <div className="bg-green-100 text-green-700 p-2 mb-4 rounded">
          Student Added Successfully!
        </div>
      )}

      <form
        onSubmit={newStudent ? handleCreateAccount : handleLogin}
        className="flex flex-col justify-center gap-5"
      >
        <input
          type="text"
          placeholder="Username"
          className="p-2 border border-gray-300 rounded w-64"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <span ref={usernameErrorRef} className="text-red-500"></span>
        <input
          type="password"
          placeholder="Password"
          className="p-2 border border-gray-300 rounded w-64"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span ref={passwordErrorRef} className="text-red-500"></span>
        <button
          type="submit"
          className={`${
            userType === "Admin" ? "bg-purple-500" : `${newStudent ? "bg-green-500" : "bg-blue-500"}`
          } text-white px-4 py-2 rounded w-64`}
        >
          {userType === "Admin" ? "Login as Admin" : newStudent ? "Create Account" : "Login as Student"}
        </button>
        {userType === "Student" && !newStudent && (
          <button
            onClick={handleNewStudentClick}
            className="mt-4 text-blue-500 underline flex justify-center"
          >
            New Student? Create an Account
          </button>
        )}
      </form>
    </div>
  );
}

export default LoginForm;