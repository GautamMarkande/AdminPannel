import React from 'react';
import './Attributes.css'
import { AiFillEye } from "@react-icons/all-files/ai/AiFillEye";
import { GrEdit } from "@react-icons/all-files/gr/GrEdit";
import { AiFillDelete } from "@react-icons/all-files/ai/AiFillDelete";
import Home from '../../pages/Home/Home';


const products = [
  {
    productId: 1,
    productName: 'Color',
    productImage: 'https://patnabazar.org/admin/assets/product/dfdf2faf13c4cc5e21559bca1be66271.png',
    category: ' 1',
    currentQuantity: 10,
    price: 25.99,
    status: 'In Stock',
    options: [<AiFillEye />, <GrEdit />, <AiFillDelete />],
  },
  {
    productId: 2,
    productName: 'size',
    productImage: 'https://patnabazar.org/admin/assets/product/dfdf2faf13c4cc5e21559bca1be66271.png',
    category: ' 2',
    currentQuantity: 5,
    price: 19.99,
    status: 'Out of Stock',
    options: [<AiFillEye />, <GrEdit />, <AiFillDelete />],
  },
  {
    productId: 3,
    productName: 'Material',
    productImage: 'https://patnabazar.org/admin/assets/product/dfdf2faf13c4cc5e21559bca1be66271.png',
    category: ' 1',
    currentQuantity: 15,
    price: 32.99,
    status: 'In Stock',
    options: [<AiFillEye />, <GrEdit />, <AiFillDelete />]
  },
  {
    productId: 1,
    productName: 'Style',
    productImage: 'https://patnabazar.org/admin/assets/product/dfdf2faf13c4cc5e21559bca1be66271.png',
    category: ' 1',
    currentQuantity: 10,
    price: 25.99,
    status: 'In Stock',
    options: [<AiFillEye />, <GrEdit />, <AiFillDelete />],
  },
  {
    productId: 2,
    productName: 'Meat Type',
    productImage: 'https://patnabazar.org/admin/assets/product/dfdf2faf13c4cc5e21559bca1be66271.png',
    category: ' 2',
    currentQuantity: 5,
    price: 19.99,
    status: 'Out of Stock',
    options: [<AiFillEye />, <GrEdit />, <AiFillDelete />],
  },
  
];



const Attributes = () => {

  const handelClick = () => {
    alert("Click me")
  }
  return (
    <>
    <Home />
    {/* <div className='appp'> */}
    <div className="App">
      <div className='ProductAndButton'>
        <h1 className='ProductTitle' style={{ padding: '1.5rem', fontFamily: 'rosemary' }}>
        All Attributes
        </h1>
        <button onClick={handelClick} className='AddProduct'>Add Product</button>
      </div>
      <div className='SearchButton'>
        search <input />
      </div>
      <table >
        <thead>
          <tr   >

            <th className='thh'>Name</th>
            <th>Value</th>
            <th>Option</th>
          </tr>
        </thead>
        {products.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.productName}</td>
              <td>{val.status}</td>
              <td style={{ fontSize: '20px', color: '#0da487', display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center', marginTop: '1.5rem' }}>{val.options}</td>
            </tr>
          )
        })}
      </table>
    </div>
    {/* </div> */}
    </>
  );
};

export default Attributes;
