import React from 'react'

const Morning = () => {
    return (<h1>Good Morning!</h1>);
}
const Afternoon = () => {
    return (<h1>Good Afternoon!</h1>);
}

const RealGreeting = ({timeOfDay}) => {
    if (timeOfDay === "morning") {
        return <Morning />;
    } else if (timeOfDay === "afternoon") {
        return <Afternoon />;
    }
}


const Greeting = () => {
  return (
    <RealGreeting timeOfDay={"afternoon"} />
  )
}

export default Greeting