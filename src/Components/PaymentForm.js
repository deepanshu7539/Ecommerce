import React, { useState } from "react";
// import { Link } from "react-router-dom";
import {Navigate, useNavigate} from 'react-router-dom';

const PaymentForm = () => {
  const [paymentInfo, setPaymentInfo] = useState({
    cardName: "",
    cardNumber: "",
    expirationDate: "",
    cvc: "",
  });
  
  const navigate=useNavigate();

  const total = "$282.00";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({
      ...paymentInfo,
      [name]: value,
    });
  };

  const handleCardChange=(e)=> {
    const { name, value } = e.target;
    setPaymentInfo({
      ...paymentInfo,
      [name]: value,
    });

    setTimeout(()=> {
      setPaymentInfo({
        ...paymentInfo,
        [name]: "x".repeat(value.length),
      });
    },100);

     
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // navigate('/history');
    // Add logic here to proceed with payment or navigate to next step
  };

  return (
    <section className="bg-white">
      <div className="mx-auto px-4 2xl:px-0">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-xl text-[#444444] text-center font-bold">
            Payment
          </h2>

          <div className="mt-6 sm:mt-8">
            <form
              className="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6 lg:max-w-xl lg:p-8 mx-auto"
              onSubmit={handleSubmit}
            >
              <div className="mb-6 grid grid-cols-2 gap-4">
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="cardName"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Name on Card <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="cardName"
                    name="cardName"
                    value={paymentInfo.cardName}
                    onChange={handleChange}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                    placeholder="Enter here.."
                    required
                    disabled
                  />
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="cardNumber"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Card number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={paymentInfo.cardNumber}
                    onChange={handleCardChange}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pe-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                    placeholder="xxxx-xxxx-xxxx-xxxx"
                    required
                    disabled
                    // pattern="^4[0-9]{12}(?:[0-9]{3})?$"
                  />
                </div>

                <div>
                  <label
                    htmlFor="expirationDate"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Card expiration <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                      <svg
                        className="h-4 w-4 text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="expirationDate"
                      name="expirationDate"
                      value={paymentInfo.expirationDate}
                      onChange={handleChange}
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-9 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="12/23"
                      required
                      disabled
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="cvc"
                    className="mb-2 flex items-center gap-1 text-sm font-medium text-gray-900"
                  >
                    CVV <span className="text-red-500">*</span>
                    {/* <button
                      data-tooltip-target="cvv-desc"
                      data-tooltip-trigger="hover"
                      className="text-gray-400 hover:text-gray-900"
                    >
                      <svg
                        className="h-4 w-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button> */}
                    <div
                      id="cvv-desc"
                      role="tooltip"
                      className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300"
                    >
                      The last 3 digits on back of card
                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </label>
                  <input
                    type="number"
                    id="cvc"
                    name="cvc"
                    value={paymentInfo.cvc}
                    onChange={handleChange}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                    placeholder="•••"
                    required
                    disabled
                  />
                </div>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-lg bg-indigo-500 px-5 py-2.5 text-sm font-medium hover:bg-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-300 text-white"
              >
                {/* <Link to="/history" className="text-white"> */}
                  Pay now {total}
                {/* </Link> */}
              </button>
            </form>

            <div className="mt-6 flex items-center justify-center gap-8">
              <img
                className="h-8 w-auto"
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal.svg"
                alt="PayPal"
              />
              <img
                className="h-8 w-auto"
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg"
                alt="Visa"
              />
              <img
                className="h-8 w-auto"
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard.svg"
                alt="Mastercard"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentForm;
