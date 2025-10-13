import React from 'react'

const ValidPassword = () => {
    return (
    <h1>Valid Password</h1>
    )
};

const InvalidPassword = () => {
    return (
    <h1>Invalid Password</h1>
)
};

const RealPassword = ({isValid}) => {
     if (isValid){
        return <ValidPassword />;
};

     return <InvalidPassword />;
};



const Password = () => {
  return (
    <section>
        <RealPassword isValid={true} />
        {console.log("Hello")}
    </section>
  )
}

export default Password