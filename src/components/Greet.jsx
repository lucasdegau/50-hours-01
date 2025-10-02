import React from 'react'
const greet = "Hello, welcome to the site!"
const date = new Date().toLocaleDateString()

const Greet = () => {
  return (
    <div>
    <h1 >{greet}</h1>
    <p>{date}</p>
    </div>
  )
}

export default Greet