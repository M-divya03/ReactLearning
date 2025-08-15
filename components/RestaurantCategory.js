import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data,index,curOpen,onOpen}) => {
    console.log("method",data);
    
    const isOpen = index === curOpen;
    
    const handleClick = () => {
        onOpen(isOpen?null:index);               
    }

    return (
       <div>
            <div  className="categoryHeader" onClick = {handleClick}>
                <div className="categoryHeaderDiv">
                <span>{data.title} ({data.itemCards.length})</span>
                <span> ^</span>
                </div>
                {isOpen && <ItemList items = {data.itemCards} />}
           </div>
         
        </div>
    );
};

export default RestaurantCategory;