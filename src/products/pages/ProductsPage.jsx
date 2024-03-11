import { AddProduct } from "../components/AddProduct";
import { ProductsList } from "../components/ProductsList";
import { useFormModal } from "../hooks/useFormModal";

export const ProductsPage = () => {
  const { addProduct, products } = useFormModal();

  const onAddProduct = (newProduct) => {
    addProduct(newProduct);
  };

  return (
    <div className="mt-6 border-t border-gray-100">
      <AddProduct onNewProduct={(event) => onAddProduct(event)} />
      <ProductsList products={products} />
    </div>
  );
};
