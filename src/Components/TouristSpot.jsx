import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { FaStar, FaStarHalfStroke } from "react-icons/fa6";

const TouristSpot = ({spot}) => {
    const {
        _id,
        image,
        tourists_spot_name,
        country_Name,
        location,
        short_description,
        average_cost,
        seasonality,
        travel_time,
        totalVisitorsPerYear,
        userEmail,
        userName
      } = spot;

    return (
        <div className="mx-auto">
            <div>
                <div className="w-80 p-4 bg-[#daedef] rounded-lg text-center space-y-2">
           <div className="relative">
           <img className="w-full rounded-lg" src={image} alt="" />

            <p className="bg-white absolute top-4 right-0 px-2 rounded-l-lg ">Average Cost : {average_cost} </p>

            <p className="bg-white absolute bottom-4 right-0 px-2 rounded-l-lg ">Travel Time : {travel_time}</p>

           </div>
           <h1 className="text-xl">{tourists_spot_name}</h1>
           <div className=" text-[#5E503F] flex items-center justify-center gap-2">{country_Name} <div className="flex items-center gap-1 justify-center"><CiLocationOn /> {location}</div> </div>
           
           <h4 className="text-xl" >{totalVisitorsPerYear} visitors/year</h4>

           <div className="flex gap-1 justify-center items-center">Ratings : <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfStroke /> #{seasonality} </div>

           <Link to={`/details/${_id}`} className="btn bg-green-400 w-full text-white animate__animated animate__pulse animate__infinite	 ">View Details</Link>

           
           
           
        </div>
            </div>
        </div>
    );
};

export default TouristSpot;