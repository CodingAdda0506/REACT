import React from 'react'
import Product from './Product'
import ProductDetails from './ProductDetails'

const App = () => {
  return (
    <div>
      <Product name="Iphone XR" />
      <ProductDetails price="Rs.200" rating="4 Star"/>
      <Product name="Iphone 14" />
      <ProductDetails price="Rs.2000" rating="5 Star"/>
      <Product name="Iphone SE" />
      <ProductDetails price="Rs.2200" rating="4 Star"/>
    </div>
  )
}

export default App