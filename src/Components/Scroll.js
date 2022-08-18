import React from 'react'
export const Scroll=(prop)=>{
return(
    <div className='tc element' style={{overflowY: "scroll", height:"500px"}}>
        {prop.children}
    </div>
)
}