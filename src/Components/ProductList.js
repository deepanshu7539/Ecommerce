import React from 'react';
import Navbar from './Navbar'
import Crouser from './Crouser';
import Products from './Products';
const products = [
  { id: 1, name: 'Product 1', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', image: 'https://via.placeholder.com/150' },
];

const ProductList = ({ isChatboxOpen }) => {
  return (
    // <div className={` container p-4 transition-all duration-300 ${isChatboxOpen ? 'sm:ml-40 md:ml-80' : 'ml-0'}`}>
      <div className=''>
        {/* <Navbar/> */}
        {/* <Crouser/> */}
        <Products/>
      </div>
    // </div>
  );
};

export default ProductList;