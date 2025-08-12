import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () =>{

    const {id} = useParams();
    console.log("params",id);

    const restData = useRestaurantMenu(id);

    const {name = "",cuisines = [],costForTwoMessage = ""} = restData?.data?.cards[2]?.card?.card?.info || {};

    const itemCards = restData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards || [];

    console.log("item cards ",itemCards);

    return  restData === null ? ( <Shimmer /> ) :(
        <div className="restaurantMenu">
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <h3>{costForTwoMessage}</h3>
            <ul className="menuLisr">
                {itemCards.map(item =>
                     <li key = {item.card.info.name}>{item.card.info.name} - {item.card.info.price/100} </li>
                    )}
            </ul>
                    </div>

    )

};

export default RestaurantMenu;