// import React from "react";
// import ReactDOM from "react-dom/client";
// import Body from "./Body";
// import { CDN_URL } from "../utils/constants";


// const RestaurantCard = (props) => {
//     const {resData} = props;

//     const {itemId,itemName,cuisine} = resData;
    
//     return (
//      <div className="res-card">
//         <img className = "res-img" alt = "rest-img" 
//         src = {CDN_URL+
//         itemId+".jpeg" } />
//         {console.log(CDN_URL+
//         itemId+".jpeg")}
//         <h3>{itemName}</h3>
//         {/* <h4>{cuisine.join(", ")}</h4> */}
//         {/* <h4>{}</h4> */}
//         {/* <h4>{deliveryTime}</h4> */}
//      </div>

//     );
// }; 

// export default RestaurantCard;

import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Body";
import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
    const {resData} = props;

    const {cloudinaryImageId,name,avgRating,cuisines,areaName} = resData?.info;
    
    return (
     <div className="res-card">
        <img className = "res-img" alt = "rest-img" 
        src = {CDN_URL+
        cloudinaryImageId} />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{resData.info.sla.slaString}</h4>
        <h4>{areaName}</h4>
     </div>

    );
}; 

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label>Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        );
    };
};


export default RestaurantCard;