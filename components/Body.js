import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import restList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
    const [ListOfRest,setRestList] = useState(restList);

    useEffect ( () => {
        {console.log("useEffect called");}
        fetchData();
    }, []
    );

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        // console.log(json[0].itemResponseList);
        // setRestList(json[0].itemResponseList);
        console.log(json?.data?.cards[0]?.data?.data?.cards);
        setRestList(json?.data?.cards[0]?.data?.data?.cards);
    }

    //conditionl rendering
    // if(ListOfRest.length === 0){
    //     return (<Shimmer />);
    // }

    return ListOfRest.length === 0 ? (<Shimmer /> ) : (
        <div className="Body">
           
            <div className="search">{"search"}              
            </div>
           
            <div className="filter">
                <button 
                    className="filter-btn" 
                    onClick={()=>{
                        const filterTopRest = ListOfRest.filter(
                            (res) => res.data.avgRating >= 4
                        );
                        setRestList(filterTopRest);
                }}
                >
                Top Rated Restaurants\
                </button>
            </div>
           
           <div className="res-container">
                {
                    ListOfRest.map((rest) => 
                    <RestaurantCard key={rest.data.id} resData =  {rest} /> 
                    )
                }     

            {/* <RestaurantCard resData = {restList[0]} />
            <RestaurantCard resData = {restList[1]} />
            <RestaurantCard resData = {restList[2]} />
            <RestaurantCard resData = {restList[3]} />
            <RestaurantCard resData = {restList[4]}/>
            <RestaurantCard resData = {restList[4]} />
            <RestaurantCard resData = {restList[5]} /> */}


            {/* <RestaurantCard 
                restName = "KFC" 
                cuisine = "Finger licking Fast Foods"
            /> */}
            {/* <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
             <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
             <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard /> */}
            </div>
        </div>
    );

};

export default Body;