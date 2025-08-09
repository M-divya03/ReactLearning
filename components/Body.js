import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import restList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";


const Body = () => {
    const [ListOfRest,setRestList] = useState(restList);
    return (
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