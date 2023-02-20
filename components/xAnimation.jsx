
export const toggleAnimation=(isToggled,number)=>{
    if (!isToggled){
        console.log(number)
        return{
            animate:{
                rotate:number === 1?"225deg":"-225deg",
                // originX:0,
                y:number === 1?10:-10,
                transiton:{
                    duration:0.5
                }
            }

        }
    }
    if (isToggled){
        return{
            initial:{
                rotate:number === 1?"225deg":"45deg",
       
            },
            animate:{
                y:0,
                rotate:0,
                transiton:{
                    duration:0.5,
                }
            }

        }
    }
}

const toggleCenter = (isToggled){
    
}