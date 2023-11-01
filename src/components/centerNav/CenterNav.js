import React from 'react'
import './CenterNav.css'
import { GrFormSearch } from "@react-icons/all-files/gr/GrFormSearch";
import { GrNotification } from "@react-icons/all-files/gr/GrNotification";
import { BiMoon } from "@react-icons/all-files/bi/BiMoon";
import Card from '../Card/Card';
// import {image} from '../../Image/Image.png'


function CenterNav() {


  return (
    <div>
      <div className='MainDiv'>
        <div style={{ display: 'flex' }}>
          <div className='CenterNav'>
            <div className='spanSearch'> <input placeholder='Search Fastkart ..' /></div>
            <span className='span'><GrFormSearch /></span>
          </div>
          <div style={{ marginLeft: '40%', marginTop: '1.5rem', fontSize: '20px' }}> <GrNotification /></div>
          <div style={{ marginLeft: '3%', marginTop: '1.5rem', fontSize: '20px' }}> <BiMoon /></div>
          <div style={{ marginLeft: '2%', marginTop: '1rem', fontSize: '20px', borderRadius: '50%' }}><img style={{ borderRadius: '50%' }} width='50px' height='50px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPfO37MK81JIyR1ptwqr_vYO3w4VR-iC2wqQ&usqp=CAU' /></div>
        </div>
        {/* <div className="CardPrising">
      <Card title="Product Name" price="$99.99" rating="4.5" icon="⭐" />
      <Card title="Another Product" price="$49.99" rating="3.9" icon="⭐" />
      <Card title="Product Name" price="$99.99" rating="4.5" icon="⭐" />
      <Card title="Another Product" price="$49.99" rating="3.9" icon="⭐" />
<<<<<<< HEAD
      {/* Add more Card components as needed */}
    
=======
    {/* </div>  */}
>>>>>>> a41e2ed2dbbe67e8986d5d99cc8529eb88df1d99
    
      </div>
      
    </div>
  )
}

export default CenterNav