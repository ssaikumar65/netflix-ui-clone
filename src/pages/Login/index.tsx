import "./index.css";
import LoginDiv from "../../components/LoginDiv";
import Footer from "../../components/Footer";
const Login = () => {
  return (
    <div className="loginpage">
      <LoginDiv />
      <div className="divide">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
