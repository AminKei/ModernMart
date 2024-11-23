import { useMemo, useState } from "react";
import { ProductModel } from "../../Models/Products";

interface DataProps {
  title: string;
  image: string;
  price: number;
}

const useSort = (products: ProductModel) => {
  const [sortMode, setSortMode] = useState<number>(0);

  const sortedData = useMemo(() => {
    if (sortMode === 1) {
      return [...products].sort((a, b) => a.price - b.price);
    } else if (sortMode === 2) {
      return [...products].sort((a, b) => b.price - a.price);
    }
    return products;
  }, [sortMode, products]);

  return { setSortMode, sortedData };
};

export default useSort;