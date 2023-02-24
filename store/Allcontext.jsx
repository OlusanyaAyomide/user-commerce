import { createContext,useState } from "react";
import {categoryItems} from "../store/constants"
import { Viewsettings } from "../store/constants";

const Allcontext = createContext({
    isnavActive:false,
    setisNavActive:function(){},
    category:[],
    setCategory:function(){},
    dropDownToggle:false,
    setDropDownToggle:function(){},
    cartItem:[],
    setCartItem:function(){},
    isSearching:false,
    setIsSearching:function(){},
    onOverLay:false,
    setOnOverLay:function(){},
    settings:Viewsettings,
    setSettings:function(){},
    isSideActive:false,
    setIsSideActive:function(){}
    
})

export function AllContextProvider(props){
    const [isnavActive,setisNavActive] = useState(false)
    const [category,setCategory] = useState(categoryItems)
    const [dropDownToggle,setDropDownToggle] = useState(false)
    const [cartItem,setCartItem] = useState([])
    const [isSearching,setIsSearching] = useState(false)
    const [onOverLay,setOnOverLay] = useState(false)
    const [settings,setSettings] = useState(Viewsettings)
    const [isSideActive,setIsSideActive] = useState(false)

    const context = {
        isnavActive,
        setisNavActive,
        category,
        setCategory,
        dropDownToggle,
        setDropDownToggle,
        cartItem,
        setCartItem,
        isSearching,
        setIsSearching,
        setOnOverLay,
        onOverLay,
        settings,
        setSettings,
        isSideActive,
        setIsSideActive,
    }
    return <Allcontext.Provider value={context}>{props.children}</Allcontext.Provider>
}
export default Allcontext