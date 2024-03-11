export const ProductsList = ({ products }) => {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {products.map((product) => (
        <li key={product.name} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img
              className="h-12 w-12 flex-none rounded-full bg-gray-50"
              alt=""
            />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {product.name}
              </p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">{product.descr}</p>
            <p className="text-sm leading-6 text-gray-900">{product.price}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
