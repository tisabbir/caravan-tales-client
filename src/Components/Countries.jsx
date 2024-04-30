import { useEffect, useState } from "react";
import TouristSpot from "./TouristSpot";

const Countries = () => {

    const [countries, setSpots] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/country')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setSpots(data);
        })
        .catch(err=>console.log(err))
    },[])


    


    return (
        <div className="mt-12 width-fixer">

            <h1 className="text-3xl font-bold text-center mb-2">Central Asian Countries</h1>
            <p className="text-center mb-6">The most attractive countries of the world.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">
           
           {
            countries.map((country)=><div key={country.id}><div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={country.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{country.country_Name}</h2>
              <p>{country.description}</p>
              <div className="card-actions">
              </div>
            </div>
          </div></div>)
           }
        </div>
        </div>
    );
};

export default Countries;