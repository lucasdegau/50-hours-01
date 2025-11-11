import React from 'react'

const Cold = () => {
    return <h1>It's Cold Outside</h1>
}
const Hot = () => {
    return <h1>It's Hot Outside</h1>
}
const Nice = () => {
    return <h1>It's Nice Outside</h1>
}

const RealWeather = ({temperature}) => {
    if (temperature < 15) {
        return <Cold />;
    } else if ( temperature >= 15 && temperature <= 25) {
        return <Nice />;
    } else {
        return <Hot />;
    }
}


const Weather = () => {
  return (
    <section>
        <RealWeather temperature={12} />
    </section>
  )
}

export default Weather