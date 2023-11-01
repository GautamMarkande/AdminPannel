import React from 'react'
import "./AddBanner.css"
function AddBanner() {
  return (
    <div className='AddMedia_container'>
       <div>
        <h1>Banners and Posters</h1>
      </div>
      <div className='Form_container'>
         <div>
          <div>Mobile</div>
          <div>Tablet</div>
          <div>Desktop</div>
         </div>
         <div>
            <span>Select Banner</span>
          <select name="category" id="category">
            <option value="womanF">Women’s Fashion</option>
            <option value="manF"> Men Fashion</option>
            <option value="childrenF">Children’s Fashion</option>
            <option value="Bags">Bags</option>
          </select>
         </div>
         <div>
          <p>Banner image</p>
          <input type="file" />
         </div>
         <div>
          <button>Add Banner</button>
         </div>
      </div>
    </div>
  )
}

export default AddBanner
