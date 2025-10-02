import React from 'react'

const users = [
    {id: 1, name: "Alice", age: "25"}, 
    {id: 2, name: "Bob", age: "30"}, 
    {id: 3, name: "Charlie", age: "22"}, 
]

const Math = () => {
  return (
    <div className='math'>
        {users.map((user) => (
            <div key={user.id}>
                <h1>{user.name}</h1>
                <h1>{user.age}</h1>
            </div>
        ))}
    </div>
  )
}






export default Math