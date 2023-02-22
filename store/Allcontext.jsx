import { createContext,useState } from "react";
import {categoryItems} from "../store/constants"

const Allcontext = createContext({
    isnavActive:false,
    setisNavActive:function(){},
    category:[],
    setCategory:function(){},
    dropDownToggle:false,
    setDropDownToggle:function(){}
})

export function AllContextProvider(props){
    const [isnavActive,setisNavActive] = useState(false)
    const [category,setCategory] = useState(categoryItems)
    const [dropDownToggle,setDropDownToggle] = useState(false)
    
    const context = {
        isnavActive,
        setisNavActive,
        category,
        setCategory,
        dropDownToggle,
        setDropDownToggle
    }
    return <Allcontext.Provider value={context}>{props.children}</Allcontext.Provider>
}
export default Allcontext