import {BsFillHandbagFill,BsWatch} from"react-icons/bs"
import {GiClothes,GiRunningShoe} from "react-icons/gi"
  
export default function GetIcon({value}){
    if(value === "Bags"){return <BsFillHandbagFill/>}
    if(value === "Clothes"){return <GiClothes/>}
    if(value === "Shoes"){return <GiRunningShoe/>}
    if(value === "Wrist Watch"){return <BsWatch/>}
       
}