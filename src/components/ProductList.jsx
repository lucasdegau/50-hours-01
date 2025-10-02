import React from 'react'

const products = [
    {id: 1, name: "Phone", price: "$699", availability: "In Stock"},
    {id: 2, name: "Laptop", price: "$1200", availability: "Out of Stock"},
    {id: 3, name: "Headphones", price: "$199", availability: "In Stock"},
]

const ProductList = () => {
  return (
    <div>
       {products.map((product) => (
        <div key={product.id}>
            <div>{product.name}</div>
            <div>{product.price}</div>
            <div>{product.availability}</div>
        </div>
       ))}
    </div>
  )
}

export default ProductList