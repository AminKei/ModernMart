import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../../Queries/Auth/Register";

export const useRegister = () => {
  const { mutate, data, isSuccess, isError ,isLoading} = useMutation({
    mutationFn: registerUser,
  });

  return {
    data,
    isError,
    isSuccess,
    isLoading,
    Register: mutate,
  };
};
