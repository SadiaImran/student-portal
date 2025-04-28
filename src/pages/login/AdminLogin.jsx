import LoginForm from "../../components/LoginForm";

function AdminLogin() {
  return (
    <LoginForm
      userType="Admin"
      validCredentials={{ username: "admin", password: "admin123" }}
      redirectPath="/admin"
    />
  );
}

export default AdminLogin;