import React from "react";
import { Card } from "./Card";
export const CardList=({robots})=>{
    const element = robots.map(
        (user,index )=>{
            return(
                <Card key={index} id={robots[index ].id} 
                name={robots[index ].name}
                email={robots[index ].email}
                />
            )
        }
    )
    return(
        <>
        {element}
        </>
    )
 }