import React from "react";
export const SearchBar=({onSearch})=>{
    return(
        <input id='input'
        className="ma2 br3 grow bg-washed-blue"
        onChange={onSearch}
        type="text"
         placeholder="Search ROBOFRIENDS">
        </input>
    )
}