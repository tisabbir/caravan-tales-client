import { useLoaderData } from "react-router-dom";


const SpotDetail = () => {
    const spot = useLoaderData();
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
        <div>
            <section className="p-6 bg-gray-100 text-gray-800">
	<div className="container grid gap-6 mx-auto text-left lg:grid-cols-2 xl:grid-cols-5">
		<div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-[#daedef] space-y-4">

        <h1 className="text-5xl font-bold">Know your spot more</h1>
			
        <h1 className="text-2xl font-bold">Spot Name : {tourists_spot_name}</h1>
        <h1 className="text-xl font-bold"> {location} || {country_Name}</h1>

        <p className="text-xl"> Description : {short_description}</p>
        <p className="text-xl"> Average Cost : {average_cost}</p>
        <p className="text-xl"> Best Season to Visit : {seasonality}</p>
        <p className="text-xl"> Travel Time : {travel_time}</p>
        <p className="text-xl"> Total Visitors Per Year : {totalVisitorsPerYear}</p>


			
		</div>
		<img src={image} alt="" className="object-cover w-full rounded-md xl:col-span-3 bg-[#daedef]" />
	</div>
</section>
        </div>
    );
};

export default SpotDetail;