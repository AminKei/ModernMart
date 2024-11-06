import Button from "../../BaseComponents/Ui/Button/Button";
import Input from "../../BaseComponents/Ui/Input/Input";
import LogSignGoogle from "../../Components/LogSignGoogle/LogSignGoogle";
import "./Register.css";
const Register = () => {
  return (
    <>
      <div className="div-root-container">
        <div className="div-container-login">
          <h1 style={{ textAlign: "center" }}> Regester Now 👋</h1>
          <p className="discraption-log-sign">
            Clarity gives you the blocks and components you need to create a
            truly professional website.
          </p>
          <LogSignGoogle />
          <div className="inputs-login">
            <label htmlFor="email">First & Last Name</label>
            <Input placeholder="i.e. Davon Lean" />
            <label htmlFor="email">Email Address</label>
            <Input placeholder="i.e. davon@mail.com" />
            <label htmlFor="password">Password</label>
            <Input placeholder="**********" />
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <Button height={50}>Create Account</Button>
            <p
              style={{ textAlign: "center" }}
              onClick={() => (document.location = "/login")}
            >
              Do You have an account? <a href="#">Login now</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
