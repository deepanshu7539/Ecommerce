
import { useState,useEffect } from "react";
import {Link,useParams, useNavigate} from 'react-router-dom'
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

const productMapping = {
    'tshirt':0,
    'jeans': 1,
    'shoes': 2,
    'watch':3,
    'bag':4,
    'basket':5,
    // Add more products as needed
  };

const products=[
    {
    id:1,
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
  },

  {
    id:2,
    name: "Jeans",
    price: "$120",
    rating: 4,
    colors: [
      {
        name: "Blue",
        bgColor: "bg-blue-700",
        to:"/item/jeans",
        selectedColor: "ring-gray-400",
        images: [
          {
            src: "https://images.pexels.com/photos/4210866/pexels-photo-4210866.jpeg?auto=compress&cs=tinysrgb&w=600",
  
            alt: "Two each of gray, white, and black shirts laying flat.",
          },
          {
            src: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F08%2Fc1%2F08c1935fb210f3e4d918f5164ecc4f65eb72aa2f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_divided_jeans_skinny%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
            alt: "Model wearing plain black Black T-shirt.",
          },
        ],
      },
    ],
    description: `
      <p>Stylish and versatile, these men's jeans feature a classic fit and durable denim. Available in light and dark blue shades, they offer a comfortable, modern look suitable for any occasion. Perfect for casual wear, they are designed with a slim fit and made from high-quality material for long-lasting use.</p>
    `,
    details: [
      {
        name: "Features",
        items: [
            "Classic fit with slight stretch",
            "Reinforced belt loops",
            "Durable denim material",
            "5-pocket design",
            "Tapered leg",
            "Double-stitched for durability",
            "Machine washable",
        ],
      },
      {
        name: "Care",
        items: [
            "Machine wash cold",
            "Tumble dry low",
            "Avoid bleach",
            "Iron on low heat if necessary",
            "Wash inside out to preserve color",
            "Do not dry clean",
        ],
      },
      {
        name: "Shipping",
        items: [
            "Standard shipping within 5-7 business days",
            "Expedited shipping options available",
            "Free shipping for orders over $100",
            "Track your order online",
            "Ships in eco-friendly packaging",
        ],
      },
      {
        name: "Returns",
        items: [
            "30-day return policy",
            "Return in original condition with tags",
            "Free returns for defective items",
            "Exchange available for different sizes",
            "Refund processed within 5 business days",
        ],
      },
      // More sections...
    ],
  },

  {
    id:3,
    name: "Men Shoes",
    price: "$120",
    rating: 4,
    colors: [
      {
        name: "White",
        bgColor: "bg-white",
        to:"/item/shoes",
        selectedColor: "ring-gray-400",
        images: [
          {
            src: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
  
            alt: "Two each of gray, white, and black shirts laying flat.",
          },
        ],
      },
    ],
    description: `
      <p>Classic and comfortable, these men's shoes offer a sleek design and reliable support. Crafted with premium materials, they provide durability for both casual and formal occasions. Available in various sizes and styles, these shoes are perfect for everyday wear, combining function and fashion effortlessly.</p>
    `,
    details: [
      {
        name: "Features",
        items: [
            "Lightweight construction",
            "Breathable mesh upper",
            "Cushioned sole for comfort",
            "Slip-resistant outsole",
            "Lace-up closure",
            "Padded collar and tongue",
            "Available in multiple sizes",
        ],
      },
      {
        name: "Care",
        items: [
            "Wipe clean with a damp cloth",
            "Air dry after cleaning",
            "Avoid direct sunlight",
            "Use mild soap for stubborn stains",
            "Replace insoles periodically",
            "Store in a cool, dry place"
        ],
      },
      {
        name: "Shipping",
        items: [
            "Free standard shipping on all shoes",
            "Express shipping options available",
            "Ships within 1-2 business days",
            "Delivery tracking available",
            "Arrives in recyclable packaging",
        ],
      },
      {
        name: "Returns",
        items: [
            "Free returns within 30 days",
            "Shoes must be unworn and in original packaging",
            "Refunds processed within 3-5 business days",
            "Exchange for different sizes or styles available",
            "Contact support for assistance with returns",
        ],
      },
      // More sections...
    ],
  },

  {
    id:4,
    name: "Watch",
    price: "$120",
    rating: 4,
    colors: [
      {
        name: "Silver",
        bgColor: "bg-gray-400",
        to:"/item/watch",
        selectedColor: "ring-gray-400",
        images: [
          {
            src: "https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&w=600",
  
            alt: "Two each of gray, white, and black shirts laying flat.",
          },
        ],
      },
    ],
    description: `
      <p>A sleek and sophisticated men's watch, combining timeless design with modern functionality. Crafted with precision, it features a durable stainless steel case, a comfortable leather or metal strap, and water resistance. Perfect for daily wear or special occasions, this watch adds a touch of elegance to any outfit while offering reliable timekeeping.</p>
    `,
    details: [
      {
        name: "Features",
        items: [
            "Premium stainless steel casing",
            "Scratch-resistant sapphire crystal",
            "Water-resistant up to 50 meters",
            "Precision quartz movement",
            "Adjustable leather strap",
            "Date and chronograph functionality",
            "Luminous hands and markers",
        ],
      },
      {
        name: "Care",
        items: [
            "Wipe with a soft cloth to clean",
            "Avoid exposing to extreme temperatures",
            "Store in a dry place when not in use",
            "Replace battery as needed",
            "Keep away from strong magnetic fields",
            "Water-resistant but avoid submersion in hot water",
        ],
      },
      {
        name: "Shipping",
        items: [
            "Free shipping on orders over $100",
            "Standard shipping within 3-5 business days",
            "Expedited options available",
            "Track your shipment online",
            "Arrives in premium packaging",
        ],
      },
      {
        name: "Returns",
        items: [
            "30-day return policy",
            "Watch must be in original condition",
            "Free returns for faulty watches",
            "Exchange available for different styles",
            "Refund processed within 7 business days",
        ],
      },
      // More sections...
    ],
  },

  {
    name: "Bag",
    price: "$120",
    rating: 4,
    colors: [
      {
        name: "Black",
        bgColor: "bg-black",
        to:"/item/bag",
        selectedColor: "ring-gray-400",
        images: [
          {
            src: "https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg?auto=compress&cs=tinysrgb&w=600",
  
            alt: "Two each of gray, white, and black shirts laying flat.",
          },
        ],
      },
    ],
    description: `
      <p>This versatile and durable bag is perfect for everyday use. Designed with multiple compartments, it offers ample storage for all your essentials, making it ideal for work, travel, or casual outings. The sleek and modern design pairs well with any outfit, while its sturdy construction ensures long-lasting functionality.</p>
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
            "Double-stitched construction",
            "Water-resistant",
        ],
      },
      {
        name: "Care",
        items: [
            "Spot clean as needed",
            "Hand wash with mild soap",
            "Avoid soaking in water",
            "Air dry after cleaning",
            "Condition leather periodically",
            "Store in a dust bag when not in use",
        ],
      },
      {
        name: "Shipping",
        items: [
            "Free shipping on orders over $75",
            "Standard shipping within 3-5 business days",
            "Expedited shipping available",
            "Ships in eco-friendly packaging",
            "Tracking information provided",
        ],
      },
      {
        name: "Returns",
        items: [
            "30-day return window",
            "Bag must be unused and in original packaging",
            "Refunds processed within 7 business days",
            "Exchange for different styles available",
            "Free return shipping",
        ],
      },
      // More sections...
    ],
  },

  {
    id:5,
    name: "Zip Tote Basket",
    price: "$120",
    rating: 4,
    colors: [
      {
        name: "White",
        bgColor: "bg-black",
        to:"/item/basket",
        selectedColor: "ring-gray-400",
        images: [
          {
            src: "https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg",
  
            alt: "Two each of gray, white, and black shirts laying flat.",
          },
        ],
      },
    ],
    description: `
      <p>A multi-purpose woven basket, ideal for storage and organization. This sturdy and eco-friendly basket comes in various sizes and is perfect for holding household items, groceries, or decorative pieces. Its lightweight yet durable design makes it easy to carry and a versatile addition to any home.</p>
    `,
    details: [
      {
        name: "Features",
        items: [
            "Multipurpose design for storage or display",
            "Made from eco-friendly materials",
            "Durable woven construction",
            "Lightweight yet sturdy",
            "Available in multiple sizes",
            "Handles for easy carrying",
            "Collapsible for easy storage",
        ],
      },
      {
        name: "Care",
        items: [
            "Wipe clean with a dry cloth",
            "Avoid exposure to direct sunlight",
            "Do not use harsh chemicals",
            "Spot clean as needed",
            "Store in a cool, dry place",
            "Do not machine wash",
        ],
      },
      {
        name: "Shipping",
        items: [
            "Free shipping on orders over $50",
            "Standard shipping within 5-7 business days",
            "Track your order online",
            "Ships in sustainable packaging",
            "Expedited options available",
        ],
      },
      {
        name: "Returns",
        items: [
            "30-day return policy",
            "Basket must be in original condition",
            "Return shipping is free",
            "Refund processed within 5 business days",
            "Contact customer support for assistance"
        ],
      },
      // More sections...
    ],
  },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({ addToCart }) {
    const { itemName } = useParams();
  const [selectedColor, setSelectedColor] = useState(null);
  const [product, setProduct] = useState(null);

  const navigate=useNavigate();

  const handleAddToCart = (product) => {
    const convertedProduct = {
      id: product.id, // Unique ID for this product
      name: product.name,
      href: product.colors[0].to,
      price: parseFloat(product.price.replace("$", "")), // Convert string price to a number
      color: product.colors[0].name, // "Blue"
      inStock: true, // You can dynamically set this if you have stock info
      size: "Large", // Set this as needed
      imageSrc: product.colors[0].images[0].src, // First image
      imageAlt: product.colors[0].images[0].alt, // First image alt text
      quantity: 1, // Default quantity
    };
    addToCart(convertedProduct);
    navigate("/cart"); // Redirect to the cart page
  };

  useEffect(() => {
    const productIndex = productMapping[itemName];
    console.log(itemName);
    if (productIndex !== undefined) {
      setProduct(products[productIndex]);
      setSelectedColor(products[productIndex].colors[0]);
    }
  }, [itemName]);

  if (!product) {
    return <div>Product not found</div>;
  }

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
                {/* <Link to="/cart"> */}
                <button
                  type="submit"
                  className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-500 px-8 py-3 text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                  onClick={() => handleAddToCart(product)}
                >
                   Add to bag
                </button>
                {/* </Link> */}

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
