import LoginForm from "../../components/LoginForm";
import { useNavigate } from "react-router-dom";

function StudentLogin() {
  const navigate = useNavigate();

  return (
    <div>
      <LoginForm userType={"Student"} redirectPath="/student"/>
    </div>
  );
}

export default StudentLogin;