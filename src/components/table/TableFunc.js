import React from 'react'
import "./TableFunc.css"
import allProducts from './product.json'
import { AiOutlineEye } from "@react-icons/all-files/ai/AiOutlineEye";
import {GrEdit} from "@react-icons/all-files/gr/GrEdit";
import {RiDeleteBin6Line} from "@react-icons/all-files/ri/RiDeleteBin6Line"
import { useNavigate } from 'react-router';
function TableFunc() {
    const navigate = useNavigate()
    return (
        <div className='table_container'>
            <div>
                <div className='heading_and_addbtn'>
                    <h1>All Category</h1>
                    <button onClick={()=>navigate("/AddCategory")}> + Add Item Product</button>
                </div>
            <div className='search_box'>
            <span>search : </span> <input type="text" placeholder='search product'/>
            </div>
           </div>
           <div className='tb_container'>
            <table>
                <thead>
                    <tr>
                        <th>
                            Product Name
                        </th>
                        <th>
                            Date
                        </th>
                        <th>
                            Product image
                        </th>
                        <th>
                            icon
                        </th>
                        <th>
                            slug
                        </th>
                        <th>
                            options
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {allProducts.map((product) => (
                        <tr>
                            <td>
                                {product.productName}
                            </td>
                            <td>
                               {product.date}
                            </td>
                            <td>
                                <img src="https://th.bing.com/th/id/OIP.65Ls2BtJcWcGRuURIqZXqgHaPW?pid=ImgDet&rs=1" alt="img" />
                            </td>
                            <td>
                            <img src="https://th.bing.com/th/id/OIP.PlT9k6MTRBgIMxLOOGxA1gHaJQ?pid=ImgDet&w=474&h=592&rs=1" alt="img" />
                            {/* <AcUnitIcon/> */}
                            </td>
                            <td>
                               {product.slug}
                            </td>
                            <td> {/* <AcUnitIcon/>
                                */}
                               <div className='options_icons'>
                                 <AiOutlineEye />
                                 <GrEdit color='blue'/>
                                 <RiDeleteBin6Line color='red'/>
                               </div>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default TableFunc
