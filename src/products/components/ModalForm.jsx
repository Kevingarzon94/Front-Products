import { useState } from "react";

export const ModalForm = ({ onNewProduct }) => {
  const [dataProduct, setDataProduct] = useState({
    name: "",
    descr: "",
    price: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDataProduct((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    if (dataProduct.name.trim().length <= 1) return;
    if (dataProduct.descr.trim().length <= 1) return;
    if (dataProduct.price.trim().length <= 1) return;

    onNewProduct(dataProduct);
  };

  return (
    <>
      <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Nombre
        </label>
        <div className="mt-2">
          <input
            value={dataProduct.name}
            onChange={handleInputChange}
            id="name"
            name="name"
            type="text"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Descripcion
        </label>
        <div className="mt-2">
          <input
            value={dataProduct.descr}
            onChange={handleInputChange}
            id="descr"
            name="descr"
            type="text"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Precio
        </label>
        <div className="mt-2">
          <input
            value={dataProduct.price}
            onChange={handleInputChange}
            id="price"
            name="price"
            type="number"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Agregar Producto
        </button>
      </div>
    </>
  );
};
