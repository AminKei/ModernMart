import axios from "axios";
import { UserRegisterBody, UserRegisterResponse } from "../../Models/User";
import { EndPoints } from "../../Config";

export const registerUser = async (body: UserRegisterBody) => {
  const r = await axios.post<UserRegisterResponse>(
    process.env.REACT_APP_BASE_URL + EndPoints.User_Register,
    body
  );
  return r.data;
};
