import {Link} from 'react-router-dom';

const orders = [
  {
    number: "AB960",
    date: "January 22, 2021",
    datetime: "2021-01-22",
    invoiceto: "#",
    total: "$282.00",
    products: [
      {
        id: 1,
        name: "T-Shirt",
        to: "/detail",
        price: "$100.00",
        status: "To be Delivered June 28, 2024",
        quantity: 1,
        imageSrc:
          "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600",
        imageAlt: "T-Shirt",
      },
      {
        id: 2,
        name: "Zip Tote Basket",
        to: "/detail",
        price: "$140.00",
        status: "To be Delivered June 28, 2024",
        quantity: 1,
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg",
        imageAlt: "Zip Tote Basket",
      },
      {
        id: 3,
        name: "Nomad Tumbler",
        to: "/detail",
        price: "$35.00",
        color: "White",
        status: "To be Delivered June 28, 2024",
        quantity:1,
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg",
        imageAlt: "Insulated bottle with white base and black snap lid.",
      },
      // More products...
    ],
  },
  // More orders...
];

export default function OrderHistory() {
  const handleCancelOrder = (orderNumber) => {};

  const handleTrackOrder = (orderNumber) => {};
  return (
    <div className="bg-white max-w-4xl mx-auto pl-4">
      <div className="mx-auto max-w-7xl">
        <div className="">
          <h1 className="text-xl mb-6 text-[#444444] text-center font-bold">
            Order Details
          </h1>
        </div>

        <div className="mt-4">
          <h2 className="sr-only">Recent orders</h2>

          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.number} className="bg-gray-50 rounded">
                <h3 className="sr-only">
                  Order placed on{" "}
                  <time dateTime={order.datetime}>{order.date}</time>
                </h3>

                <div className="rounded-lg bg-gray-50 p-4 sm:flex sm:flex-col sm:items-center sm:justify-between sm:space-x-6 sm:px-6 lg:space-x-8 gap-6">
                  <dl className="space-y-6 divide-y divide-gray-200 text-sm text-gray-600 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:space-y-0 sm:divide-y-0 lg:flex-none lg:gap-x-8">
                    <div className="flex justify-between sm:block">
                      <dt className="font-medium text-gray-900">Date placed</dt>
                      <dd className="sm:mt-1">
                        <time dateTime={order.datetime}>June 24, 2024</time>
                      </dd>
                    </div>
                    <div className="flex justify-between pt-6 sm:block sm:pt-0">
                      <dt className="font-medium text-gray-900">
                        Order number
                      </dt>
                      <dd className="sm:mt-1">{order.number}</dd>
                    </div>
                    <div className="flex justify-between pt-6 font-medium text-gray-900 sm:block sm:pt-0">
                      <dt>Total amount</dt>
                      <dd className="sm:mt-1">{order.total}</dd>
                    </div>
                  </dl>
                  <div className="flex justify-between items-center gap-2">
                    <Link
                      to={order.invoiceto}
                      className="mt-6 flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto"
                      //   onClick={handleNext}
                    >
                      View Invoice
                      <span className="sr-only">for order {order.number}</span>
                    </Link>
                    <button
                      type="button"
                      className="mt-6 flex items-center justify-center w-full sm:w-auto px-4 py-2 rounded-md border border-red-300 bg-red-500 text-sm font-medium shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 text-white sm:mt-0 sm:w-auto"
                      onClick={() => handleCancelOrder(order.number)}
                    >
                      Cancel Order
                      <span className="sr-only">for order {order.number}</span>
                    </button>
                    <button
                      type="button"
                      className="mt-6 flex items-center justify-center w-full sm:w-auto px-4 py-2 rounded-md border border-indigo-500 bg-indigo-500 text-sm font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto"
                      onClick={() => handleTrackOrder(order.number)}
                    >
                      <Link to="/status"> Track Order</Link>

                      <span className="sr-only">for order {order.number}</span>
                    </button>
                  </div>
                </div>

                <table className="mt-4 w-full text-gray-500 sm:mt-6">
                  <caption className="sr-only">Products</caption>
                  <thead className="text-left text-sm text-gray-500 sm:not-sr-only">
                    <tr>
                      <th
                        scope="col"
                        className="py-3 pr-8 font-normal sm:w-2/5 lg:w-1/3 p-4"
                      >
                        Product
                      </th>
                      <th
                        scope="col"
                        className="w-1/5 py-3 pr-8 font-normal sm:table-cell"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="py-3 pr-8 font-normal sm:w-2/5 lg:w-1/3 p-4"
                      >
                        Quantity
                      </th>
                      <th
                        scope="col"
                        className="py-3 pr-8 font-normal sm:table-cell"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 border-b border-gray-200 text-sm sm:border-t">
                    {order.products.map((product) => (
                      <tr key={product.id}>
                      <Link to="/detail">
                        <td className="">
                          <div className="flex items-center">
                            <div>
                              <img
                                src={product.imageSrc}
                                alt={product.imageAlt}
                                className="mr-6 h-16 w-16 rounded object-cover object-center"
                              />
                              <div className="font-medium text-gray-900 sm:w-2/5 lg:w-2/3 pl-4">
                                {product.name}
                              </div>
                            </div>
                            <div>
                              <div className="hidden mt-1 sm:hidden">
                                {product.price}
                              </div>
                            </div>
                          </div>
                        </td>
                      </Link>
                        <td className=" sm:table-cell text-black">
                          {product.price}
                        </td>
                        <td className=" sm:table-cell text-black">
                          {product.quantity}
                        </td>
                        <td className="sm:table-cell text-black ">
                          {product.status}
                        </td>
                        
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
