function HogCards({hogProp}){
    console.log({hogProp})
    return (<li> <img src = {hogProp.image} alt = 'Hog Image'/> 
    <h2>{hogProp.name}</h2>
    <button>Hide</button> </li>)
}

export default HogCards