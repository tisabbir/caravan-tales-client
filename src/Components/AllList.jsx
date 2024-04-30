import { useEffect, useState } from "react";
import AllListSpot from "./AllListSpot";


const AllList = () => {

    const [spots, setSpots] = useState([]);
    useEffect(()=>{
        fetch('https://caravan-tales-server.vercel.app/allspots')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setSpots(data);
        })
        .catch(err=>console.log(err))
    },[])

    const handleSort = () => {
        console.log('sortHandled');

        let sortedSpots = [];
        sortedSpots = [...spots].sort((a,b)=>{
           return a.average_cost - b.average_cost;
        })
        setSpots(sortedSpots);

    }

    return (
        <div>
            <div className="mt-12 width-fixer">

<h1 className="text-3xl font-bold text-center mb-2">All Tourist Spots Created By Our Users</h1>
<p className="text-center mb-6">Feel the power of community.</p>

        <div className="flex justify-center mb-16">
        <details className="dropdown">
  <summary className="m-1 btn">Sort Spots</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><button onClick={handleSort}>Average Cost</button></li>
  </ul>
</details>
        </div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">

{
spots.map((spot)=><AllListSpot spot={spot} key={spot._id}></AllListSpot>)
}
</div>
</div>
        </div>
    );
};

export default AllList;