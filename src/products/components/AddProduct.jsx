import { useModal } from "../hooks/useModal";
import { Modal } from "./Modal";

export const AddProduct = ({ onNewProduct }) => {
  const { onShowing, toggle } = useModal();
  return (
    <div>
      <button
        onClick={toggle}
        type="submit"
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Agregar Producto
      </button>
      <Modal isShowing={onShowing} hide={toggle} onNewProduct={onNewProduct} />
    </div>
  );
};
