import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import restList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
    const [ListOfRest,setRestList] = useState(restList?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    const [searchText,setSearchText] = useState("");
    const [filteredRest,setFilteredRest] = useState(restList?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

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

    return  !ListOfRest || ListOfRest.length === 0 ? (<Shimmer /> ) : (
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
                    <RestaurantCard key={rest.info.id} resData =  {rest} /> 
                    )
                }     
            </div>
        </div>
    );
}

export default Body;