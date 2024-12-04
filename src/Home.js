import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Faq from './Components/Faq';

const clothes = [
  {
    id: 1,
    name: "T-Shirt",
    color: "White and black",
    href: "/cart",

    imageSrc:
      "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$100",
    detail: '/detail',
  },
  {
    id: 2,
    name: "Jeans",
    color: "Blue",
    href: "/cart",

    imageSrc:
      "https://images.pexels.com/photos/4210866/pexels-photo-4210866.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$120",
    detail: '/item/jeans',
  },
  {
    id: 1,
    name: "Zip Tote Basket",
    color: "White and black",
    href: "/cart",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
    detail:'/item/basket',
  },
]

const acc=[
  {
    id:4,
    name: "Shoes",
    color: "White",
    href: "/cart",

    imageSrc:
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$120",
    detail:'/item/shoes',
  },
  {
    id: 5,
    name: "Watch",
    color: "Silver",
    href: "/cart",

    imageSrc:
      "https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$120",
    detail:'/item/watch',
  },
  {
    id: 6,
    name: "Bag",
    color: "Black",
    href: "/cart",

    imageSrc:
      "https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$120",
    detail:'/item/bag',
  },
]



function Home({ addToCart }) {
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    const convertedProduct = {
      id: product.id, // Unique ID for this product
      name: product.name,
      href: product.href,
      price: parseFloat(product.price.replace("$", "")), // Convert string price to a number
      color: product.color, // "Blue"
      inStock: true, // You can dynamically set this if you have stock info
      size: "Large", // Set this as needed
      imageSrc: product.imageSrc, // First image
      imageAlt: product.altSrc, // First image alt text
      quantity: 1, // Default quantity
    };
    addToCart(convertedProduct);
    navigate("/cart"); // Redirect to the cart page
  };
  return (
    <div>
      <div
        className="bg-cover bg-center h-80 text-white flex items-center justify-center mt-2"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/2460436/pexels-photo-2460436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 text-center rounded-lg">
          <h2 className="text-3xl font-bold mb-4">
            Mega Deals on Our Best Products!
          </h2>
          <p className="mb-6 text-4xl">
            Grab up to <span className="font-bold">50% off</span> on selected items. Limited time offer!
          </p>
          <Link
            to="/products"
            className="bg-red-500 py-3 px-6 rounded-full font-semibold hover:bg-yellow-400 transition duration-300"
          >
            Start Shopping
          </Link>
        </div>
      </div>

      <div
        className="bg-cover bg-center h-80 text-white flex items-center justify-center mt-2"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg')",
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 text-center rounded-lg">
          <h2 className="text-3xl font-bold mb-4">
            Discover the Latest Fashion Trends!
          </h2>
          <p className="mb-6 text-lg">
            Shop our new arrivals and get up to <span className="font-bold">40% off</span> on selected items.
          </p>
          <Link
            to="/products"
            className="bg-yellow-500 text-black py-3 px-6 rounded-full font-semibold hover:bg-yellow-400 transition duration-300"
          >
            Start Shopping
          </Link>
        </div>
      </div>

      <div className='mt-8 text-xl font-bold'>
        <h1>Clothing</h1>
        <div className="mt-2 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          {clothes.map((product) => (
            <div key={product.id} className="">
              <div className="relative">
                <Link to={product.detail}>
                  <div className="relative h-72 w-full overflow-hidden rounded-lg">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </Link>
                <div className="flex justify-between items-center">
                  <div className="relative mt-4">
                    <h3 className="text-sm font-medium text-gray-900">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <div>
                    <p className="relative text-lg font-semibold text-black mr-6">
                      {product.price}
                    </p>
                  </div>
                </div>
                <Link to={product.detail}>
                  <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                    {/* <p className="relative text-lg font-semibold text-white">
                      {product.price}
                    </p> */}
                  </div>
                </Link>
              </div>
              <div className="mt-6 flex justify-between">
                <div>
                  <Link
                    to={product.detail}
                    className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                  >
                    More Details
                    <span className="sr-only"> {product.name}</span>
                  </Link>
                </div>

                <div>
                  <button
                    className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-200 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add Bag
                    <span className="sr-only"> {product.name}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className='mt-8 text-xl font-bold'>
        <h1>Shoes and Accessories</h1>
        <div className="mt-2 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          {acc.map((product) => (
            <div key={product.id} className="">
              <div className="relative">
                <Link to={product.detail}>
                  <div className="relative h-72 w-full overflow-hidden rounded-lg">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </Link>
                <div className="flex justify-between items-center">
                  <div className="relative mt-4">
                    <h3 className="text-sm font-medium text-gray-900">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <div>
                    <p className="relative text-lg font-semibold text-black mr-6">
                      {product.price}
                    </p>
                  </div>
                </div>
                <Link to={product.detail}>
                  <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                    {/* <p className="relative text-lg font-semibold text-white">
                      {product.price}
                    </p> */}
                  </div>
                </Link>
              </div>
              <div className="mt-6 flex justify-between">
                <div>
                  <Link
                    to={product.detail}
                    className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                  >
                    More Details
                    <span className="sr-only"> {product.name}</span>
                  </Link>
                </div>

                <div>
                  <button
                    className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-200 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add Bag
                    <span className="sr-only"> {product.name}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Faq/> 
    </div>
  )
}

export default Home