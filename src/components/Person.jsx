import React from 'react'

const Person = (props) => {
  return (
    <Info name={props.name} age={props.age} />
  )
}


const Info = ({name, age}) => {
  return (
    <section>
        <h2>Name: {name}</h2> 
        <p>Age: {age}</p>
    </section>
  )
}


export default Person