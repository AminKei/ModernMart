import { useEffect, useState } from "react";
import Input from "../../BaseComponents/Ui/Input/Input";
import LogSignGoogle from "../../Components/LogSignGoogle/LogSignGoogle";
import { useRegister } from "../../Hooks/Auth/useRegister";
import { useAppNavigate } from "../../Hooks/Navigation/useAppNavigate";
import "./Register.css";
import swal from "sweetalert";
import { UserRegisterBody } from "../../Models/User";
import Loader from "../../BaseComponents/Ui/LoadTemplate/Loader/Loader";
const Register = () => {
  const { goToLogin, goToDashboard } = useAppNavigate();

  const { Register, data, isError, isSuccess, isLoading } = useRegister();

  const [form, setForm] = useState<UserRegisterBody>({
    email: "",
    name: "",
    password: "",
    avatar: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    if (form.name && form.email && form.password && form.avatar) {
      Register(form);
    } else {
      swal({
        title: "First, complete the file values",
      });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      swal({
        title: "Register is Successfully",
        icon: "success",
        // button: "Aww yiss!",
      });
      goToLogin();
    }
    if (isError) {
      swal({
        title: "Register is Unsuccessful",
        icon: "error",
      });
    }
  }, [isSuccess, isError]);

  console.log(data);

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
            <label htmlFor="name">First & Last Name</label>
            <Input
              placeholder="i.e. Davon Lean"
              value={form?.name}
              onChange={(e) =>
                setForm((currentState) => ({
                  ...currentState,
                  name: e.target.value,
                }))
              }
            />
            <label htmlFor="email">Email Address</label>
            <Input
              placeholder="i.e. davon@mail.com"
              value={form?.email}
              type="email"
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
            <label htmlFor="">Avatar Link</label>
            <Input
              placeholder="Your Avatar Link"
              value={form?.avatar}
              // type="file"
              onChange={(e) =>
                setForm((currentState) => ({
                  ...currentState,
                  avatar: e.target.value,
                }))
              }
            />
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <button onClick={handleSubmit}>Create Account</button>
            {isLoading && <Loader />}
            {isError && (
              <p style={{ color: "red" }}>
                Register has a error try again later ...
              </p>
            )}
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
