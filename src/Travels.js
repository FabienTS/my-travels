import React from "react";
import Travel from "./Travel";

const travels = [
    {
        destination:"Rome",
        country:"Italy",
        photo:"https://image.ibb.co/n38rp9/Webp_net_resizeimage.jpg",
        distance:"1 446 km"
    },
    {
        destination:"Quebec",
        country:"Canada",
        photo:"https://image.ibb.co/dzr8K9/Webp_net_resizeimage_2.jpg",
        distance:"6 611 km"

    },
    {
        destination:"Amsterdam",
        country:"Netherlands",
        photo:"https://image.ibb.co/emtawz/Webp_net_resizeimage_3.jpg",
        distance:"502 km"
    },
    {
        destination:"London",
        country:"England",
        photo:"https://image.ibb.co/mT44pK/Webp_net_resizeimage_4.jpg",
        distance:"464 km"
    },
    {
        destination:"Lapland",
        country:"Finland",
        photo:"https://image.ibb.co/fgfc9K/Webp_net_resizeimage_5.jpg",
        distance:"3 199 km"
    }
]

const Travels = () => (
    <div>
      {travels.map(travel => (
        <Travel destination={travel.destination} 
        country={travel.country} 
        photo={travel.photo} 
        distance={travel.distance} />
      ))}
    </div>
  );

export default Travels;