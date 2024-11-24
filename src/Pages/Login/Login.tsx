import Input from "../../BaseComponents/Ui/Input/Input";
import LogSignGoogle from "../../Components/LogSignGoogle/LogSignGoogle";
import "./Login.css";
import { useAppNavigate } from "../../Hooks/Navigation/useAppNavigate";
import { useLogin } from "../../Hooks/Auth/useLogin";
import { useEffect, useState } from "react";
import { LoginUserBody } from "../../Models/User";
import swal from "sweetalert";
import Loader from "../../BaseComponents/Ui/LoadTemplate/Loader/Loader";
const Login = () => {
  const { goToDashboard } = useAppNavigate();

  const { Login, isLoading, isError, isSuccess, data } = useLogin();

  const [form, setForm] = useState<LoginUserBody>({
    email: "",
    password: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    if (form.email && form.password) {
      Login(form);
    } else {
      swal({
        title: "First, complete the file values",
      });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      {
        swal({
          title: "Login is Successfully",
          icon: "success",
        });
        goToDashboard();
      }
    }
    if (isError) {
      {
        swal({
          title: "Login is Unsuccessful",
          icon: "error",
        });
      }
    }
  }, [isSuccess, isError]);

  console.log(data);

 

  return (
    <>
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
            <Input
              placeholder="i.e. davon@mail.com"
              type="email"
              value={form?.email}
              onChange={(e) =>
                setForm((currentState) => ({
                  ...currentState,
                  email: e.target.value,
                }))
              }
            />
            <label htmlFor="password">Password</label>
            <Input
              placeholder="**********"
              type="password"
              value={form?.password}
              onChange={(e) =>
                setForm((currentState) => ({
                  ...currentState,
                  password: e.target.value,
                }))
              }
            />
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <button onClick={handleSubmit}>Login</button>
            <p
              style={{ textAlign: "center" }}
              onClick={() => (document.location = "/register")}
              >
              Do You Not have an account? <a href="#">Sing Up now</a>
            </p>
              {
                isLoading && <Loader />
              }
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
