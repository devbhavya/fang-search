import React from 'react'
import './error.css'
import Nodata from './Images/nodata.gif' 
const Error = () => {
  return (
    <div className='error_page'>
        <p className='error_title'>404</p>
        <img src={Nodata} className='nodata_image'></img>
        <h1 className='error_description'>No Data Found</h1>
    </div>
  )
}

export default Error