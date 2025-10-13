import React from 'react'

const Product = (props) => {
  return (
    <Info name={props.name} price={props.price} />
  )
}

const Info = (props) => {
  return (
    <section>
        <h2>Name: {props.name}</h2> 
        <p>Price: {props.price}</p>
    </section>
  )
}

export default Product