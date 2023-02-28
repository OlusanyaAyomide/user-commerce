import { createContext,useState } from "react";
import {categoryItems,discountItems,featuredPoduct} from "../store/constants"
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
    headerInView:true,
    setHeaderInView:function(){},
    featured:[],
    setFeatured:function(){},
    topDiscounts:[],
    setTopDiscounts:function(){},
    
})

export function AllContextProvider(props){
    const [isnavActive,setisNavActive] = useState(false)
    const [category,setCategory] = useState(categoryItems)
    const [dropDownToggle,setDropDownToggle] = useState(false)
    const [cartItem,setCartItem] = useState([])
    const [isSearching,setIsSearching] = useState(false)
    const [onOverLay,setOnOverLay] = useState(false)
    const [settings,setSettings] = useState(Viewsettings)
    const [headerInView,setHeaderInView] = useState(true)
    const [featured,setFeatured] = useState(featuredPoduct)
    const [topDiscounts,setTopDiscounts] = useState(discountItems)

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
        headerInView,
        setHeaderInView,
        featured,
        setFeatured,
        topDiscounts,
        setTopDiscounts,
    }
    return <Allcontext.Provider value={context}>{props.children}</Allcontext.Provider>
}
export default Allcontext