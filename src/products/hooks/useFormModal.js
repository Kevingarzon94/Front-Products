import { useState } from "react";

export const useFormModal = () => {
  const [products, setProducts] = useState([
    {
      name: "Camisa de rayas",
      descr: "Buenas camisa de algodon",
      price: "$30.000",
    },
  ]);

  const addProduct = (data) => {
    setProducts((prod) => [data, ...prod]);
    console.log(products);
  };

  return {
    products,
    addProduct,
  };
};
