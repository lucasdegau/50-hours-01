import React from 'react'
const produto = {
    name : "Laptop",
    price : "$1200",
    availability : "In Stock"
}


const ProductInfo = () => {
  return (
    <div>
        <p>Name: {produto.name}</p>
        <p>Price: {produto.price}</p>
        <p>Availability: {produto.availability}</p>
    </div>
  )
}

export default ProductInfo