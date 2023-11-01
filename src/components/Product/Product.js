import React from 'react';
import './Product.css'
import { AiFillEye } from "@react-icons/all-files/ai/AiFillEye";
import { GrEdit } from "@react-icons/all-files/gr/GrEdit";
import { AiFillDelete } from "@react-icons/all-files/ai/AiFillDelete";
import Home from '../../pages/Home/Home';





const products = [
  {
    productId: 1,
    productName: 'Product A',
    productImage: 'https://patnabazar.org/admin/assets/product/dfdf2faf13c4cc5e21559bca1be66271.png',
    category: ' 1',
    currentQuantity: 10,
    price: 25.99,
    status: 'In Stock',
    options: [<AiFillEye />, <GrEdit />, <AiFillDelete />],
  },
  {
    productId: 2,
    productName: 'Product B',
    productImage: 'https://patnabazar.org/admin/assets/product/dfdf2faf13c4cc5e21559bca1be66271.png',
    category: ' 2',
    currentQuantity: 5,
    price: 19.99,
    status: 'Out of Stock',
    options: [<AiFillEye />, <GrEdit />, <AiFillDelete />],
  },
  {
    productId: 3,
    productName: 'Product C',
    productImage: 'https://patnabazar.org/admin/assets/product/dfdf2faf13c4cc5e21559bca1be66271.png',
    category: ' 1',
    currentQuantity: 15,
    price: 32.99,
    status: 'In Stock',
    options: [<AiFillEye />, <GrEdit />, <AiFillDelete />]
  },
  {
    productId: 1,
    productName: 'Product A',
    productImage: 'https://patnabazar.org/admin/assets/product/dfdf2faf13c4cc5e21559bca1be66271.png',
    category: ' 1',
    currentQuantity: 10,
    price: 25.99,
    status: 'In Stock',
    options: [<AiFillEye />, <GrEdit />, <AiFillDelete />],
  },
  {
    productId: 2,
    productName: 'Product B',
    productImage: 'https://patnabazar.org/admin/assets/product/dfdf2faf13c4cc5e21559bca1be66271.png',
    category: ' 2',
    currentQuantity: 5,
    price: 19.99,
    status: 'Out of Stock',
    options: [<AiFillEye />, <GrEdit />, <AiFillDelete />],
  },
  {
    productId: 3,
    productName: 'Product C',
    productImage: 'https://patnabazar.org/admin/assets/product/dfdf2faf13c4cc5e21559bca1be66271.png',
    category: ' 1',
    currentQuantity: 15,
    price: 32.99,
    status: 'In Stock',
    options: [<AiFillEye />, <GrEdit />, <AiFillDelete />],
  },
  {
    productId: 3,
    productName: 'Product C',
    productImage: 'https://patnabazar.org/admin/assets/product/dfdf2faf13c4cc5e21559bca1be66271.png',
    category: ' 1',
    currentQuantity: 15,
    price: 32.99,
    status: 'In Stock',
    options: [<AiFillEye />, <GrEdit />, <AiFillDelete />],
  },
  {
    productId: 3,
    productName: 'Product C',
    productImage: 'https://patnabazar.org/admin/assets/product/dfdf2faf13c4cc5e21559bca1be66271.png',
    category: ' 1',
    currentQuantity: 15,
    price: 32.99,
    status: 'In Stock',
    options: [<AiFillEye />, <GrEdit />, <AiFillDelete />],
  },
  {
    productId: 3,
    productName: 'Product C',
    productImage: 'https://patnabazar.org/admin/assets/product/dfdf2faf13c4cc5e21559bca1be66271.png',
    category: ' 1',
    currentQuantity: 15,
    price: 32.99,
    status: 'In Stock',
    options: [<AiFillEye />, <GrEdit />, <AiFillDelete />],
  },
];



const Product = () => {

  const handelClick = () => {
    alert("Click me")
  }
  return (
    <>
      <Home />
      <div className='appp'>
        <div className="App">
          <div className='ProductAndButton'>
            <h1 className='ProductTitle' style={{ padding: '1.5rem', fontFamily: 'rosemary' }}>
              Products List
            </h1>
            <button onClick={handelClick} className='AddProduct'>Add Product</button>
          </div>
          <div className='SearchButton'>
            search <input />
          </div>
          <div className='TableSection'>
            <table >
              <thead>
                <tr   >

                  <th className='thh'>Product Image</th>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Current Qty</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Option</th>
                </tr>
              </thead>
              {products.map((val, key) => {
                return (
                  <tr key={key} >
                    <td className='tdd'> <img width='50px' heigth='50px' src={val.productImage} /></td>
                    <td>{val.productName}</td>
                    <td style={{ fontSize: '20px', color: '#0da487' }}>{val.category}</td>
                    <td>{val.currentQuantity}</td>
                    <td>{val.price}</td>
                    <td>{val.status}</td>
                    <td style={{ fontSize: '20px', color: '#0da487', display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center', marginTop: '1.5rem' }}>{val.options}</td>
                  </tr>
                )
              })}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
