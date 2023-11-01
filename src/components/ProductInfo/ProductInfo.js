import React from 'react';
import './ProductInfo.css';
import Home from '../../pages/Home/Home';

export default function App() {
  return (
    <>
      <Home />
      <div className="mainDiv">

        <div className="ProductInfoMain">
          <div className="ProductInfo">Product Information</div>
          <div className="ProductInfoName">
            <label htmlFor="">Product Name</label>
            <input className='input' type="text" placeholder='Product Name' />
          </div>

          {/* <div className="ProductInfoName">
          <label htmlFor="">Product Type</label>
          <select className="input">
            <option>Simple</option>
            <option>Classified</option>
          </select>
        </div> */}
          <div className="ProductInfoName">
            <label htmlFor="">Product Category</label>
            <select className="input">
              <option>Mens</option>
              <option>Women Bottoms</option>
              <option>Kids</option>
              <option>Seasonal Collection</option>
            </select>
          </div>

          <div className="ProductInfoName">
            <label htmlFor="">Filter</label>
            <select className="input">

              <option>Color</option>
              <option>Size</option>
              <option>Price</option>
            </select>
          </div>
          <div className="ProductInfoSwitch">
            <label htmlFor="">Exchangeble</label>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
            </div>
          </div>
          <div className="ProductInfoSwitch">
            <label htmlFor="">Exchangeble</label>

            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            </div>
          </div>


          <button>Submit</button>

        </div>
        <div className="Description">
          <div className="ProductInfo">
            Descripsen
          </div>
          <div className="ProductInfoName">
            Product Descripsen


          </div>
        </div>
        <div>
          <div className='Category_container'>
            <div>
              <h1>Product Inventory</h1>
            </div>
            <div>
              <span>SKU</span>
              <input type="text" placeholder='Category Name' />
            </div>
            <div>
              <span>Stock Status</span>
              <select name="icons" id="icons">
                {/* <option value="" disabled selected>Select icon</option> */}
                <option value="1">In Stock</option>
                <option value="1">Out Of Stock</option>
                <option value="1">No Back Oder</option>

              </select>
              {/* <div></div> */}
            </div>
            <div style={{ border: '1px solid black', height: '40vh' }}>
              <table>
                <thead>
                  <tr>
                    <th>Variant</th>
                    <th>Price</th>
                    <th>SKU</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tr>
                  <td>red</td>
                  <td><input/></td>
                  <td><input/></td>
                  <td><input/></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
