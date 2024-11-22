import axios from "axios";
import { LoginUserBody, UserLoginResponse } from "../../Models/User";
import { EndPoints } from "../../Config";

export const loginUser = async (body: LoginUserBody) => {
  const r = await axios.post<UserLoginResponse>(
    process.env.REACT_APP_BASE_URL + EndPoints.User_Login,
    body
  );
  return r.data;
};
