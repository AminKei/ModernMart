import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "../../Config";
import { getProfile } from "../../Queries/Auth/Profile";

export const useProfile = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: [QueryKeys.Get_Profile],
    queryFn: getProfile,
  });

  return { data, isLoading, error };
};
