import React from 'react';
import './AddAttribute.css';
import Home from '../../pages/Home/Home';

export default function App() {
  return (
    <>
    <Home />
    <div className="mainDiv">
      <div className="ProductInfo">Add Attribute</div>

      <div className="ProductInfoMain">
        <div className="ProductInfoName">
          <label htmlFor="">Attribute Name</label>
          <input className='input' type="text"  placeholder='Product Name' />
        </div>

        <div className="ProductInfoName">
          <label htmlFor="">Attribute Value</label>
          <input className='input' type="text"  placeholder='Product Name' />
         
        </div>
        {/* <div className="ProductInfoName">
          <label htmlFor="">Category</label>
          <select className="input">
            <option>Ethnic Wear</option>
            <option>Ethnic Bottoms</option>
            <option>Women Western</option>
            <option>Sandels</option>
          </select>
        </div> */}
        {/* <div className="ProductInfoName">
          <label htmlFor="">Subcategory</label>
          <select className="input">
          <option>Ethnic Wear</option>
            <option>Ethnic Bottoms</option>
            <option>Women Western</option>
            <option>Sandels</option>
          </select>
        </div> */}
        {/* <div className="ProductInfoName">
          <label htmlFor="">Brand</label>
          <select className="input">
          <option>Ethnic Wear</option>
            <option>Ethnic Bottoms</option>
            <option>Women Western</option>
            <option>Sandels</option>
          </select>
        </div> */}
        {/* <div className="ProductInfoName">
          <label htmlFor="">Tags</label>
          <select className="input">
          <option>Ethnic Wear</option>
            <option>Ethnic Bottoms</option>
            <option>Women Western</option>
            <option>Sandels</option>
          </select>
        </div> */}
        {/* <div className="ProductInfoName">
          <label htmlFor="">Brand</label>
          <select className="input">
          <option>Ethnic Wear</option>
            <option>Ethnic Bottoms</option>
            <option>Women Western</option>
            <option>Sandels</option>
          </select>
        </div> */}
        <button>Submit</button>
      </div>
    </div>
    </>
  );
}
