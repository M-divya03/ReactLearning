import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { useState } from "react";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () =>{

    const {id} = useParams();
    console.log("params",id);
   
    const [curOpen,setCurOpen]=useState(null);

    const restData = useRestaurantMenu(id);

    const {name = "",cuisines = [],costForTwoMessage = ""} = restData?.data?.cards[2]?.card?.card?.info || {};

    // const itemCards = restData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards|| [];
    const itemCards = restData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards || [];

    const categories =  restData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")


    console.log("categories ",categories);

    console.log("item cards ",itemCards);

    return  restData === null ? ( <Shimmer /> ) :(
        <div className="restaurantMenu">
            <h1 className="restName">{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            {categories.map( 
                    (category,index)=>{
                        return (
                        <RestaurantCategory 
                            key = {category?.card?.card?.title}
                            data = {category?.card?.card}
                            index={index} 
                            curOpen={curOpen}
                            onOpen = {setCurOpen} 
                        />
                        // console.log("Restaurant category called",category.card.card);
                        );
                    }
                )
            }
        </div>

    )

};

export default RestaurantMenu;