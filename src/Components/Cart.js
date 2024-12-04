import {
  CheckIcon,
  ClockIcon,
  QuestionMarkCircleIcon,
  XMarkIcon as XMarkIconMini,
} from "@heroicons/react/20/solid";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Faq from "./Faq";
import { useEffect, useState } from "react";

const initialProducts = [
];

export default function Cart({ cartItems }) {

  const [products, setProducts] = useState(cartItems);
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(5.00);
  const [tax, setTax] = useState(2.00);
  const [total, setTotal] = useState(0);

  const handleChangeQuantity = (productId, productQuant) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === productId ? { ...product, quantity: productQuant } : product
      )
    )
  }

  const handleRemoveProduct = (productId) => {
    setProducts((prev) => prev.filter(product => product.id !== productId));
  }

  useEffect(() => {
    const newSubtotal = products.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    setSubtotal(newSubtotal);
    if(newSubtotal===0) {
      setShipping(0);
      setTax(0);
    }
    setTotal(newSubtotal + (newSubtotal>100?0:shipping) + tax);
  }, [products, shipping, tax]);

  return (
    <div className="bg-white w-full">
      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>
      </header>

      <main className="mx-auto max-w-2xl px-4 pb-4 pt-4 sm:px-2 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl text-[#444444] text-center font-bold">
          Shopping Cart:
        </h2>

        <form className="mt-6">
          <section aria-labelledby="cart-heading">
            <ul
              role="list"
              className="divide-y divide-gray-200 border-b border-t border-gray-200"
            >
              {products.map((product, productIdx) => (
                <li key={product.id} className="flex py-2 sm:py-4">
                  <Link to={product.href}>
                  <div className="flex-shrink-0">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                    />
                  </div>
                  </Link>

                  <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-sm">
                            <Link
                              to={product.href}
                              className="font-medium text-gray-700 hover:text-gray-800"
                            >
                              {product.name}
                            </Link>
                          </h3>
                        </div>
                        <div className="mt-1 flex text-sm">
                          <p className="text-gray-500">{product.color}</p>
                          {product.size ? (
                            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
                              {product.size}
                            </p>
                          ) : null}
                        </div>
                        <p className="mt-1 text-sm font-medium text-gray-900">
                          ${product.price}.00
                        </p>
                      </div>

                      <div className="mt-4 sm:mt-0 sm:pr-9">
                        <label
                          htmlFor={`quantity-${product.id}`}
                          className="sr-only"
                        >
                          Quantity, {product.name}
                        </label>
                        <select
                          id={`quantity-${product.id}`}
                          name={`quantity-${product.id}`}
                          className="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                          value={product.quantity}
                          onChange={(e) => handleChangeQuantity(product.id, parseInt(e.target.value, 10))}
                        >
                          {[...Array(8)].map((_, i) => (
                            <option key={i} value={i + 1}>
                              {i + 1}
                            </option>
                          ))}
                        </select>

                        <div className="absolute right-0 top-0">
                          <button
                            type="button"
                            className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Remove</span>
                            <XMarkIconMini
                              className="h-5 w-5"
                              aria-hidden="true"
                              onClick={()=>handleRemoveProduct(product.id)}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 flex space-x-2 text-sm text-gray-700">
                      {product.inStock ? (
                        <CheckIcon
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                          aria-hidden="true"
                        />
                      ) : (
                        <ClockIcon
                          className="h-5 w-5 flex-shrink-0 text-gray-300"
                          aria-hidden="true"
                        />
                      )}
                      <span>
                        {product.inStock
                          ? "In stock"
                          : `Ships in ${product.leadTime}`}
                      </span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Order summary at the bottom */}
          <section
            aria-labelledby="summary-heading"
            className="mt-10 rounded-lg bg-gray-50 px-4 py-6 sm:p-2 lg:p-8"
          >
            <h2
              id="summary-heading"
              className="text-lg font-medium text-gray-900"
            >
              Order summary
            </h2>

            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Subtotal</dt>
                <dd className="text-sm font-medium text-gray-900">${subtotal}.00</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="flex items-center text-sm text-gray-600">
                  <span>Shipping estimate</span>
                  <Link
                    to="#"
                    className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">
                      Learn more about how shipping is calculated
                    </span>
                    <QuestionMarkCircleIcon
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </Link>
                </dt>
                <dd className="text-sm font-medium text-gray-900">${total>100?0:shipping}.00</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="flex text-sm text-gray-600">
                  <span>Tax estimate</span>
                  <Link
                    to="#"
                    className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">
                      Learn more about how tax is calculated
                    </span>
                    <QuestionMarkCircleIcon
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </Link>
                </dt>
                <dd className="text-sm font-medium text-gray-900">${tax}.00</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="text-base font-medium text-gray-900">
                  Order total
                </dt>
                <dd className="text-base font-medium text-gray-900">${total}.00</dd>
              </div>
            </dl>

            <div className="mt-6">
              <Link
                to="/payment"
                className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Checkout
              </Link>
            </div>
          </section>
        </form>
      </main>

      {/* <Faq /> */}
    </div>
  );
}
