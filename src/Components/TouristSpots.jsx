import { useEffect, useState } from "react";
import TouristSpot from "./TouristSpot";

const TouristSpots = () => {

    const [spots, setSpots] = useState([]);
    useEffect(()=>{
        fetch('https://caravan-tales-server.vercel.app/spots')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setSpots(data);
        })
        .catch(err=>console.log(err))
    },[])


    


    return (
        <div className="mt-12 width-fixer">

            <h1 className="text-3xl font-bold text-center mb-2 mx-auto">Best Tourist Spots</h1>
            <p className="text-center mb-6">Dive in the elegant lands of  Central Asian Countries.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
           
           {
            spots.map((spot)=><TouristSpot spot={spot} key={spot._id}></TouristSpot>)
           }
        </div>
        </div>
    );
};

export default TouristSpots;