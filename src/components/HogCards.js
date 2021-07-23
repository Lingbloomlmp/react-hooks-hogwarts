import React, { useState } from "react"

function HogCards({hogProp}){
    const [detailsToggle, setDetailsToggle] = useState(false)

    function renderHogDetails() {
        const greased = hogProp.greased

        return (
            <div>
            <p>Speciality: {hogProp.specialty} </p>
            <p>Weight: {hogProp.weight} </p>
            <p>Greased: {greased? "Yes" : "No"} </p>
            <p>Highest Medal Achieved: {hogProp["highest medal achieved"]} </p>
            </div>
        )
    }

    function handleDetailsToggle(){
        setDetailsToggle(!detailsToggle)
    }

    console.log({hogProp})
    return (
    <li> 
        <img src = {hogProp.image} alt = 'Hog Image'/> 
        <h2>{hogProp.name}</h2>
        <button onClick={handleDetailsToggle}>{detailsToggle ? "Hide Details" : "Show Details"}</button> 
        {detailsToggle? renderHogDetails() : null}
        </li>

    )
}

export default HogCards