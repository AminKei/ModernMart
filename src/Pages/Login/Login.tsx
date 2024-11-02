import Button from "../../BaseComponents/Ui/Button/Button";
import Input from "../../BaseComponents/Ui/Input/Input";
import LogSignGoogle from "../../Components/LogSignGoogle/LogSignGoogle";
import "./Login.css";
const Login = () => {
  return (
    <>
      <p>Back</p>
      <div className="div-root-container">
        <div className="div-container-login">
          <h1 style={{ textAlign: "center" }}>Login Now 👋</h1>
          <p className="discraption-log-sign">
            Clarity gives you the blocks and components you need to create a
            truly professional website.
          </p>
          <LogSignGoogle />
          <div className="inputs-login">
            <label htmlFor="email">Email Address</label>
            <Input placeholder="i.e. davon@mail.com" />
            <label htmlFor="password">Password</label>
            <Input placeholder="**********" />
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <Button height={50}>Login</Button>
            <p
              style={{ textAlign: "center" }}
              onClick={() => (document.location = "/register")}
            >
              Do You Not have an account? <a href="#">Sing Up now</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
