import React from 'react'

const ProductDetails = ({price, rating}) => {
  return (
    <div>
        <h2>{price}</h2>
        <h3>{rating}</h3>
    </div>
  )
}

export default ProductDetails