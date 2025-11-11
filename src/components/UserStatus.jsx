import React from 'react'

const LoggedIn = () => {
    return (<h1>Welcome User!</h1>);
}

const IsAdmin = () => {
    return (<h1>Welcome Admin!</h1>);
}

const RealUserStatus = ({isLoggedIn, isAdmin}) => {
    if (isAdmin && isLoggedIn) {
        return <IsAdmin />;
    } else if (isLoggedIn) {
        return <LoggedIn />;
}
}



const UserStatus = () => {
  return (
    <section>
        <RealUserStatus isLoggedIn={true} isAdmin={false} />
    </section>
  )
}

export default UserStatus