import React from 'react'
export const Scroll=(prop)=>{
return(
    <div className='tc element' style={{overflowY: "scroll", height:"390px"}}>
        {prop.children}
    </div>
)
}