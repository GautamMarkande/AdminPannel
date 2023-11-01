import React from 'react'
import "./AddCategory.css"
import {RiDeleteBin6Line} from "@react-icons/all-files/ri/RiDeleteBin6Line"
function AddCategory() {
  return (
    <div className='Category_container'> 
      <div>
        <h1>Category information</h1>
      </div>
      <div>
        <span>Category Name:</span>
        <input type="text" placeholder='Category Name'/>
      </div>
      <div>
        <span>Category image</span>
        <input type="file" />
      </div>
      <div>
        <span>Select Category icon</span>
        <select name="icons" id="icons">
            <option value="" disabled selected>Select icon</option>
            <option value="1">chai</option>
            <option value="1">coeffie</option>
            <option value="1">chockolate</option>
            <option value="1">aata</option>
            <option value="1">tata</option>
        </select>
      </div>
    </div>
  )
}

export default AddCategory
