import axios from "axios";
import { ProductModel, ProductObject } from "../../Models/Products";
import { EndPoints } from "../../Config";

export const getProducts = async () => {
  const r = await axios.get<ProductModel>(
    process.env.REACT_APP_BASE_URL + EndPoints.Product_List
  );
  return r.data;
};


export const getProductById = async (id: string) => {
    const r = await axios.get<ProductObject>(
      process.env.REACT_APP_BASE_URL + EndPoints.Product_List + `/${id}`
    );
    return r.data;
  };
  