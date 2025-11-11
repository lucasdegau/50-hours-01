import React from 'react'

const Cart = () => {
  const items = ["Wireless Earbuds", "Power Bank", "New SSD", "Hoodie"];

    return <div>
        <h1>Shopping Cart</h1>
        {items.length > 0 && <h2>You have {items.length} items in your cart</h2>}
        <ul>
            <h4>Products</h4>
            {items.map(item => (
                <li key={Math.random()}>{item}</li>
            ))}
        </ul>    
    
    
    
    </div>
}

export default Cart