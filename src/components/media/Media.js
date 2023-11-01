import React from 'react'
import "./Media.css"
import { useGetProductsQuery } from '../../servises/apis'
function Media() {
  const {data, isLoading, isError} = useGetProductsQuery()
  console.log(data)
  return (
    <div className='Media_container'>
     
    </div>
  )
}

export default Media
