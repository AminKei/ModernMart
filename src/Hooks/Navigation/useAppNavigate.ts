import { useNavigate } from "react-router-dom";

export const useAppNavigate = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };
  const goToRegister = () => {
    navigate("/register");
  };
  const goToLogin = () => {
    navigate("/login");
  };
  const goToDashboard = () => {
    navigate("/dashboard");
  };
  const goToProductDetails = (id: number) => {
    navigate(`/singleproduct?id=${id}`);
  };
  

  return {
    goToHome,
    goToDashboard,
    goToRegister,
    goToLogin,
    goToProductDetails,
  };
};
