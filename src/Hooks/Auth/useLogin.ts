import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../../Queries/Auth/Login";
import { StorageKey } from "../../Config";

export const useLogin = () => {
  const { isLoading, mutate, isError, isSuccess, data } = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      localStorage.setItem(StorageKey.User_Token, data.access_token);
      return data;
    },
  });

  return {
    isLoading,
    data,
    isError,
    isSuccess,
    Login: mutate,
  };
};
