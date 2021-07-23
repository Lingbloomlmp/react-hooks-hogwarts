import HogCards from './HogCards'
function HogContainter({hogDataProp}){
    console.log(hogDataProp)
    return (<ul>
        {hogDataProp.map(hog => {
            return(
            <HogCards hogProp= {hog}/>)
        })


        }
    </ul>)
}
export default HogContainter