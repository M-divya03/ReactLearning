import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "../components/Header"
import Body from "../components/Body";
// import About from "../components/About";
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom";
import Error from "../components/Error";
import Contact from "../components/Contact";
import RestaurantMenu from "../components/RestaurantMenu";
// import { Outlet } from "react-router-dom";

// const resObj =   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "73011",
//       name: "KFC",
//       uuid: "27ff4155-fe46-418e-9862-ab98953bf953",
//       city: "22",
//       area: "Anand Vihar Colony",
//       totalRatingsString: "5000+ ratings",
//       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
//       cuisines: ["American", "Snacks", "Biryani"],
//       tags: [],
//       costForTwo: 30000,
//       costForTwoString: "₹300 FOR TWO",
//       deliveryTime: 31,
//       minDeliveryTime: 31,
//       maxDeliveryTime: 31,
//       slaString: "31 MINS",
//       lastMileTravel: 6.199999809265137,
//       slugs: {
//         restaurant: "kfc-chukkuwala-chukkuwala",
//         city: "dehradun",
//       },
//       cityState: "22",
//       address:
//         "KFC Restaurant, Khasra No 1281/1291, Opp Dr Manish Jain hospital, Chakrata road, Dehradun-248001",
//       locality: "Clock Tower",
//       parentId: 547,
//       unserviceable: false,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: "50% off",
//         shortDescriptionList: [
//           {
//             meta: "50% off | Use WELCOME50",
//             discountType: "Percentage",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "50% off up to ₹100 | Use code WELCOME50",
//             discountType: "Percentage",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       aggregatedDiscountInfoV2: {
//         header: "50% OFF",
//         shortDescriptionList: [
//           {
//             meta: "Use WELCOME50",
//             discountType: "Percentage",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "50% off up to ₹100 | Use code WELCOME50",
//             discountType: "Percentage",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       ribbon: [
//         {
//           type: "PROMOTED",
//         },
//       ],
//       chain: [],
//       feeDetails: {
//         fees: [],
//         totalFees: 0,
//         message: "",
//         title: "",
//         amount: "",
//         icon: "",
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: "",
//         nextCloseMessage: "",
//       },
//       longDistanceEnabled: 0,
//       rainMode: "NONE",
//       thirdPartyAddress: false,
//       thirdPartyVendor: "",
//       adTrackingID: "cid=5698075~p=1~eid=00000185-8b09-7c92-0e51-a04b00dc0124",
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: "6.1 kms",
//       hasSurge: false,
//       sla: {
//         restaurantId: "73011",
//         deliveryTime: 31,
//         minDeliveryTime: 31,
//         maxDeliveryTime: 31,
//         lastMileTravel: 6.199999809265137,
//         lastMileDistance: 0,
//         serviceability: "SERVICEABLE",
//         rainMode: "NONE",
//         longDistance: "NOT_LONG_DISTANCE",
//         preferentialService: false,
//         iconType: "EMPTY",
//       },
//       promoted: true,
//       avgRating: "4.0",
//       totalRatings: 5000,
//       new: false,
//     },
//     subtype: "basic",
//   }


// const RestaurantCard = ({resData}) => {

const About = lazy(()=> import("../components/About"));

const AppLayout = () => {
    return (
        <div className="app">
            <Header /> 
            <Outlet />
        </div>
    );
};

const routerConfig = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children : [
            {
                path:"/",
                element:<Body />,
            },
            {
            path:"/About",
            element:<Suspense fallback = {<h1>About us is loading</h1>}><About /></Suspense>,
            },
            {
                path:"/Contact",
                element:<Contact />
            },
            {
                path:"/restaurant/:id",
                element:<RestaurantMenu />
            },
        ],
        errorElement:<Error />,
    }
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routerConfig} />);
