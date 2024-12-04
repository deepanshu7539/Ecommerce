import React, {useState} from 'react'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./Components/ProductList";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import ProductDetail from "./Components/ProductDetail";
import EachProductDetail from "./Components/EachProductDetail";
import OrderHistory from "./Components/OrderHistory";
import ProgressBar from "./Components/ProgressBar";
import PaymentForm from "./Components/PaymentForm";
import Products from "./Components/Products";
import RedProductDetail from './Components/RedProductDetail';
import GrayProductDetail from './Components/GrayProductDetail';
import Crouser from './Components/Crouser';
import Home from './Home';

function RouterPage() {
   const [cartItems, setCartItems] = useState([
    
   ]);

  // Function to add product to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => [product,...prevItems]);
  };

  return (
    <Router>
      <div className="" >
        <div className="z-50">
        </div>
        <div
          className={` p-4 transition-all duration-300 mr-0`}
        >
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<Home addToCart={addToCart} />}
            />
            {/* Add more routes here if needed */}
            {/* <Route
              path="/nav"
              element={<Navbar isChatboxOpen={isChatboxOpen} />}
            /> */}
            <Route path="/cart" element={<Cart cartItems={cartItems} />} />
            <Route path="/detail" element={<ProductDetail addToCart={addToCart} />} />
            <Route path="/red" element={<RedProductDetail addToCart={addToCart}  />}/>
            <Route path="/gray" element={<GrayProductDetail addToCart={addToCart} />}/>
            <Route path="/history" element={<OrderHistory />} />
            <Route path="/status" element={<ProgressBar />} />
            <Route path="/products" element={<Products addToCart={addToCart} />} />
            <Route path="/payment" element={<PaymentForm />} />
            <Route path="/item/:itemName" element={<EachProductDetail addToCart={addToCart} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default RouterPage