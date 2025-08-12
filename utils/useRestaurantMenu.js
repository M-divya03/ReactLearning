import { useEffect } from "react";
import { REST_API } from "./constants";


const useRestaurantMenu = (id) => {
    
    const [restData,setRestData] = useState(null);

    useEffect(()=>{
        fetchRestData();
    },[]);

    const fetchRestData = async () =>  {
       const data = await fetch(REST_API + id+"&catalog_qa=undefined&submitAction=ENTER");
        // "https://corsproxy.io/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.920017399999999&lng=78.1205054&restaurantId=454199"
       const json = await data.json();
       setRestData(json);
       console.log("json",json);
        // console.log("name",json?.data?.cards[2]?.card?.card?.info?.name);
    };
    return restData;
};

export default useRestaurantMenu;