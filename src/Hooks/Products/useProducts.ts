import { useQuery } from "@tanstack/react-query";
import { QueryKeys, StaleTime } from "../../Config";
import { getProductById, getProducts } from "../../Queries/Products/Products";

export const useProducts = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: [QueryKeys.Product_List],
    queryFn: getProducts ,
    staleTime: StaleTime.Product_List,
  });

  return { data, isLoading, error };
};


export const useProductById = (id: string | null) => {
    const { data, error, isLoading } = useQuery({
      queryKey: [QueryKeys.Single_Product],
      enabled: Boolean(id),
      queryFn: () => getProductById(id!),
    });
  
    return { data, isLoading, error };
  };

  