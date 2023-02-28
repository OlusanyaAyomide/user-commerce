import { animate } from "framer-motion"

export const toggleAnimation=(number)=>{
        return{
            initial:{
             rotate:0,
             height:"4px",
             y:0,
            },
            animate:{
                rotate:number === 1?"45deg":"-45deg",
                y:number === 1?9.2:-9.2,
                height:"3px",
                transition:{
                    duration:0.5,
                    stiffness:1
                }
            },
            animateback:{
                    rotate:0,
                    height:"4px",
                    y:0,
                transition:{
                    duration:0.5,
                    stiffness:1
                }
            },


        }
    }

export const toggleCenter = ()=>{
        return{
            initial:{
                height:"4px",
                x:0,
                opacity:1,
            },
            animate:{
                x:50,
                opacity:0,
                height:"0px",
                transition:{
                    duration:0.5,
                    stiffness:1
                }
            },
            animateback:{
                x:0,
                opacity:1,
                height:"4px",
                transition:{
                    duration:0.5,
                    stiffness:1
            }
          
        }   
    
    }
}

export const DropDownMotion={
    initial:{
        height:"0px",
    },
    animate:{
        height:"fit-content",
        transition:{
            duration:0.5,
            stiffness:1
        }
    }
}
export const searchMotion ={
    initial:{
        y:-40,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            stiffness:0,
            duration:0.2
        }
    }
}

export const NavBarMotion = {
    initial:{
        x:-500,
    },
    animate:{
        x:0,
        transition:{
            stiffness:1,
            duration:0.5
        }
    },
    animateback:{
        x:-500,
        transition:{
            stiffness:1,
            duration:0.5
        }   
    }
}

export const fadeIn = {
    initial:{
        opacity:0.6,
        transition:{
            duration:0
        }   
    },
    animate:{
        opacity:1,
        transition:{
            duration:0.5,
            repeat:Infinity,
            // repeatType:"reverse"
            repeatDelay:10
        }
    }
}

export const FeaturedAnimation = (index)=>{
 return{
    initial:{
        x:100,
        scaleY:index===0?0.6:1
    },
    animate:{
        x:0,
        scaleY:1,
        transition:{
            duration:0.6,
        //     repeat:Infinity,
        //     // repeatType:"reverse"
        //     repeatDelay:3.8
        // }
    }
}
 }  
}