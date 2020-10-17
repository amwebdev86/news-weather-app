import React, { useState, useEffect } from 'react'

export default function Temperature(props) {
    const [temperature, setTemperature] = useState({props});

    return (
        <h1>{props.data.temp}</h1>
    )
}