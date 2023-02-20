import { createContext,useState } from "react";

const Allcontext = createContext({
    navActive:false,
    setNavActive:function(){},
})

export function AllContextProvider(props){
    const [navActive,setNavActive] = useState(false)

    const context = {
        navActive,
        setNavActive,
    }
    return <Allcontext.Provider value={context}>{props.children}</Allcontext.Provider>
}
export default Allcontext