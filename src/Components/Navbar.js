import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({ isChatboxOpen }) {
  const location = useLocation();

  // Function to determine if the current route matches
  const isActiveRoute = (route) => location.pathname === route;

  return (
    <div
      className={`border-b-2 transition-all duration-300 ${
        isChatboxOpen ? "sm:ml-40 md:ml-80" : "ml-0"
      }`}
    >
      <Disclosure as="nav" className="bg-white shadow">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <Link to='/'>
                    <img
                      className="h-16 w-auto"
                      src="https://r2.erweima.ai/imgcompressed/compressed_9bdc427d52f7344122f8c0955c780abc.webp"
                      alt="Your Company"
                    />
                    </Link>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    <Link
                      to="/"
                      className={classNames(
                        isActiveRoute("/") ? "border-indigo-500 text-gray-900" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                        "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
                      )}
                    >
                      Home
                    </Link>
                    <Link
                      to="/products"
                      className={classNames(
                        isActiveRoute("/products") ? "border-indigo-500 text-gray-900" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                        "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
                      )}
                    >
                      Products
                    </Link>
                    <Link
                      to="/cart"
                      className={classNames(
                        isActiveRoute("/cart") ? "border-indigo-500 text-gray-900" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                        "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
                      )}
                    >
                      Cart
                    </Link>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <MenuButton className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png"
                          alt=""
                        />
                      </MenuButton>
                    </div>
                  </Menu>
                </div>
              </div>
            </div>

            <DisclosurePanel className="sm:hidden">
              <div className="space-y-1 pb-4 pt-2">
                <Link
                  to="/"
                  className={classNames(
                    isActiveRoute("/") ? "border-l-4 border-indigo-500 bg-indigo-50 text-indigo-700" : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700",
                    "block py-2 pl-3 pr-4 text-base font-medium"
                  )}
                >
                  Home
                </Link>
                <Link
                  to="/products"
                  className={classNames(
                    isActiveRoute("/products") ? "border-l-4 border-indigo-500 bg-indigo-50 text-indigo-700" : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700",
                    "block py-2 pl-3 pr-4 text-base font-medium"
                  )}
                >
                  Products
                </Link>
                <Link
                  to="/cart"
                  className={classNames(
                    isActiveRoute("/cart") ? "border-l-4 border-indigo-500 bg-indigo-50 text-indigo-700" : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700",
                    "block py-2 pl-3 pr-4 text-base font-medium"
                  )}
                >
                  Cart
                </Link>
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
