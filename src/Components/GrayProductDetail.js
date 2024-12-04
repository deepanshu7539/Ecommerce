
import { useState } from "react";
import {Link,useNavigate} from 'react-router-dom'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Radio,
  RadioGroup,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import { HeartIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import Review from './Review'


const product = {
  name: "Round Neck T-Shirt",
  price: "$100",
  rating: 4,
  colors: [
    {
      name: "White",
      bgColor: "bg-black",
      to:"/detail",
      selectedColor: "ring-gray-400",
      images: [
        {
          src: "https://www.westside.com/cdn/shop/products/100001_300847997_002_1.jpg?v=1715198984&width=493",

          alt: "Two each of gray, white, and black shirts laying flat.",
        },
        {
          src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
          alt: "Model wearing plain black Black T-shirt.",
        },
        {
          src: "https://nikfashions.in/wp-content/uploads/2019/03/Black-Plain-T-Shirt-Folded.jpg",
          alt: "Model wearing plain gray Black T-shirt.",
        },
        {
          src: "https://www.westside.com/cdn/shop/products/100001_300847997_002_3.jpg?v=1715198984&width=493",
          alt: "Model wearing plain white Black T-shirt.",
        },
      ],
    },
    {
      name: "Washed Black",
      bgColor: "bg-red-700",
      to:"/red",
      selectedColor: "ring-gray-700",
      images: [
        {
          id: 1,
          name: "Angled view",
          src: "https://img.freepik.com/premium-photo/t-shirt-mockup_917213-68288.jpg?size=626&ext=jpg",

          alt: "Angled front view with bag zipped and handles upright.",
        },
        {
          id: 2,
          name: "Angled view",
          src: "https://img.freepik.com/premium-photo/midsection-man-with-red-hair-against-white-background_1048944-23699154.jpg?size=626&ext=jpg&ga=GA1.1.2077537170.1719203521&semt=ais_user",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        {
          id: 3,
          name: "Angled view",
          src: "https://img.freepik.com/free-photo/red-folded-t-shirt_125540-814.jpg?t=st=1719203743~exp=1719207343~hmac=b8e935af770d93093787dc667fbbed6d4d6cfaf25c44f419947ce1e16f825602&w=900",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        {
          id: 4,
          name: "Angled view",
          src: "https://img.freepik.com/premium-photo/mock-up-red-tee-shirts-hanging-wall_265339-609.jpg?size=626&ext=jpg&ga=GA1.1.2077537170.1719203521&semt=ais_user",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        // More images for Washed Black...
      ],
    },

    {
      name: "Washed Gray",
      bgColor: "bg-gray-500",
      to:"/gray",
      selectedColor: "ring-gray-500",
      images: [
        {
          id: 1,
          name: "Angled view",
          src: "https://img.freepik.com/premium-photo/gray-tshirt-hanging-hanger-generative-ai-image-tshirt-mockup_87646-19918.jpg?w=360",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        {
          id: 2,
          name: "Angled view",
          src: "https://img.freepik.com/free-photo/composition-father-s-day-clothing_23-2148868940.jpg?t=st=1719213227~exp=1719216827~hmac=c1d6d62b472e9166ad8eb8e5500b7b8e4d404c88d62ff41108548bba76357d51&w=900",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        {
          id: 3,
          name: "Angled view",
          src: "https://img.freepik.com/free-photo/bearded-guy-points-his-new-t-shirt_273609-17367.jpg?t=st=1719213191~exp=1719216791~hmac=9537f2868c7f99b05f8bd06e85ecbc01a4f6f98fcd0cdba56d18506ec7a35348&w=900",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        {
          id: 4,
          name: "Angled view",
          src: "https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448806.jpg?t=st=1719213119~exp=1719216719~hmac=62cc1587a3d405cb96c078fad6624c07dbfcd0626eb7e4ad369cf8b92651a0a2&w=360",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        // More images for Washed Gray...
      ],
    },
  ],
  description: `
    <p>The Round Neck T-Shirt is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
  details: [
    {
      name: "Features",
      items: [
        "Multiple strap configurations",
        "Spacious interior with top zip",
        "Leather handle and tabs",
        "Interior dividers",
        "Stainless strap loops",
        "Double stitched construction",
        "Water-resistant",
      ],
    },
    {
      name: "Care",
      items: [
        "Spot clean as needed",
        "Hand wash with mild soap",
        "Leather handle and tabs",
        "Interior dividers",
        "Stainless strap loops",
        "Double stitched construction",
        "Water-resistant",
      ],
    },
    {
      name: "Shipping",
      items: [
        "Spot clean as needed",
        "Hand wash with mild soap",
        "Leather handle and tabs",
        "Interior dividers",
        "Stainless strap loops",
        "Double stitched construction",
        "Water-resistant",
      ],
    },
    {
      name: "Returns",
      items: [
        "Spot clean as needed",
        "Hand wash with mild soap",
        "Leather handle and tabs",
        "Interior dividers",
        "Stainless strap loops",
        "Double stitched construction",
        "Water-resistant",
      ],
    },
    // More sections...
  ],
};


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({ addToCart }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[2]);
  const navigate=useNavigate();

  const handleAddToCart = (product) => {
    const convertedProduct = {
      id: product.id, // Unique ID for this product
      name: product.name,
      href: "/gray",
      price: parseFloat(product.price.replace("$", "")), // Convert string price to a number
      color: "Gray", // "Blue"
      inStock: true, // You can dynamically set this if you have stock info
      size: "Large", // Set this as needed
      imageSrc: "https://img.freepik.com/premium-photo/gray-tshirt-hanging-hanger-generative-ai-image-tshirt-mockup_87646-19918.jpg?w=360", // First image
      imageAlt: "gray t-shirt", // First image alt text
      quantity: 1, // Default quantity
    };
    addToCart(convertedProduct);
    navigate("/cart"); // Redirect to the cart page
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-6xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <TabGroup className="flex flex-col-reverse">
            {/* Image selector */}
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
              <TabList className="grid grid-cols-4 gap-6">
                {selectedColor.images.map((image) => (
                  <Tab
                    key={image.id}
                    className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                  >
                    {({ selected }) => (
                      <>
                        <span className="sr-only">{image.name}</span>
                        <span className="absolute inset-0 overflow-hidden rounded-md">
                          <img
                            src={image.src}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </span>
                        <span
                          className={classNames(
                            selected ? "ring-indigo-500" : "ring-transparent",
                            "pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2"
                          )}
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </Tab>
                ))}
              </TabList>
            </div>

            <TabPanels className="aspect-h-1 aspect-w-1 w-full">
              {selectedColor.images.map((image) => (
                <TabPanel key={image.id}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover object-center sm:rounded-lg"
                  />
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {product.name}
            </h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                {product.price}
              </p>
            </div>

            {/* Reviews */}
            <div className="mt-3">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        product.rating > rating
                          ? "text-indigo-500"
                          : "text-gray-300",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{product.rating} out of 5 stars</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>

              <div
                className="space-y-6 text-base text-gray-700"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>

            <form className="mt-6">
              {/* Colors */}
              <div>
                <h3 className="text-sm font-medium text-gray-600">Color</h3>

                <fieldset aria-label="Choose a color" className="mt-2">
                  <RadioGroup
                    value={selectedColor}
                    onChange={setSelectedColor}
                    className="flex items-center space-x-3"
                  >

                    {product.colors.map((color) => (
                      <Link to={color.to}>
                      <Radio
                        key={color.name}
                        value={color}
                        aria-label={color.name}
                        className={({ focus, checked }) =>
                          classNames(
                            color.selectedColor,
                            focus && checked ? "ring ring-offset-1" : "",
                            !focus && checked ? "ring-2" : "",
                            "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                          )
                        }
                      >
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.bgColor,
                            "h-8 w-8 rounded-full border border-black border-opacity-10"
                          )}
                        />
                      </Radio>
                      </Link>
                    ))}
                  </RadioGroup>
                </fieldset>
              </div>

              <div className="mt-10 flex">
                <button
                  type="submit"
                  className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-500 px-8 py-3 text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                  onClick={() => handleAddToCart(product)}
                >
                   Add to bag
                </button>

                <button
                  type="button"
                  className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                >
                  <HeartIcon
                    className="h-6 w-6 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Add to favorites</span>
                </button>
              </div>
            </form>

            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">
                Additional details
              </h2>

              <div className="divide-y divide-gray-200 border-t">
                {product.details.map((detail) => (
                  <Disclosure as="div" key={detail.name}>
                    {({ open }) => (
                      <>
                        <h3>
                          <DisclosureButton className="group relative flex w-full items-center justify-between py-6 text-left">
                            <span
                              className={classNames(
                                open ? "text-indigo-600" : "text-gray-900",
                                "text-sm font-medium"
                              )}
                            >
                              {detail.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </DisclosureButton>
                        </h3>
                        <DisclosurePanel
                          as="div"
                          className="prose prose-sm pb-6"
                        >
                          <ul role="list">
                            {detail.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </div>
            </section>
          </div>
        </div>
        <Review />
      </div>
    </div>
  );
}
