import axios from "axios";
import { UserProfile } from "../../Models/User";
import { EndPoints, StorageKey } from "../../Config";

export const getProfile = async () => {
  const r = await axios.get<UserProfile>(
    process.env.REACT_APP_BASE_URL + EndPoints.User_Profile,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(StorageKey.User_Token)}`,
      },
    }
  );
  return r.data;
};
