import React from "react";
export const Card=({id ,name, email})=>{
    return(<div className="shadow grow tc br3 ma2 bg-lightest-blue">
     <img  src= {` https://robohash.org/${id}?200x200 `} alt="robo"></img>
     <p className="tc navy b">{name}</p>
     <p className="tc pa2 b">{email}</p>
     </div>
    );
    }