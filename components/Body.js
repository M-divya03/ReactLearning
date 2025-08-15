import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import restList from "../utils/mockData";
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
// import { useOnlineStatus } from "../utils/useOnlineStatus";

const Body = () => {
    const [ListOfRest,setRestList] = useState(restList?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    const [searchText,setSearchText] = useState("");
    const [filteredRest,setFilteredRest] = useState(restList?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    console.log("rerendering occurs");
    console.log(ListOfRest);

    useEffect ( () => {
        {console.log("useEffect called");}
        fetchData();
    }, []
    );

    const fetchData = async () => {
        const data = await fetch(
            "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.920017399999999&lng=78.1205054&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        console.log(json?.data?.cards[4]?.card.card.gridElements.infoWithStyle.restaurants);
        setRestList(json?.data?.cards[4]?.card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRest(json?.data?.cards[4]?.card.card.gridElements.infoWithStyle.restaurants);
    }

    const filterrestBasedOnSearchText = (searchText,ListOfRest) => {
        return (ListOfRest.filter((rest) =>
             rest.info.name.toLowerCase().includes(
                searchText.toLowerCase()
            )));
    }

    //conditionl rendering
    // if(ListOfRest.length === 0){
    //     return (<Shimmer />);
    // }
    const onlineStatus = useOnlineStatus();
    if(onlineStatus  === false ){
        return <h1>u r offline</h1>;
    }

    return (!ListOfRest || ListOfRest.length === 0) ? (<Shimmer /> ) : (
        <div className="Body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}></input>
                    <button className="searchbtn" onClick={ () =>{
                        console.log(searchText);
                        setFilteredRest(filterrestBasedOnSearchText(searchText,ListOfRest));
                    }}>Search</button>
                </div>
                <button 
                    className="filter-btn" 
                    onClick={()=>{
                        const filterTopRest = ListOfRest.filter(
                            (res) => res.info.avgRating >= 4.5
                        );
                        setFilteredRest(filterTopRest);
                }}
                >
                Top Rated Restaurants
                </button>
            </div>
           
           <div className="res-container">
                {
                    filteredRest.map((rest) => 
                        <Link  key={rest.info.id}
                        to = {"/restaurant/"+ rest.info.id}>

                        rest.data.promoted ? <RestaurantCardPromoted resData = {rest}/> :
                    <RestaurantCard resData =  {rest} /> 
                    </Link>
                    )
                }     
            </div>
        </div>
    );
};

export default Body;