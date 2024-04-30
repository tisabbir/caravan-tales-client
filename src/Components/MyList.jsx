import { useEffect, useState } from "react";
import AllListSpot from "./AllListSpot";
import useAuth from "../Hooks/useAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyList = () => {

    const {user,} = useAuth();

    const [spots, setSpots] = useState([]);
    useEffect(()=>{
        fetch('https://caravan-tales-server.vercel.app/allspots')
        .then(res => res.json())
        .then(data => {
            console.log(data);

            setSpots(data.filter((spt) => spt.userEmail === user.email ))
            
            
        })
        .catch(err=>console.log(err))
    },[user.email])


    // spots.filter((spt) => spt.userEmail === user.email )

    

    const handleSort = () => {
        console.log('sortHandled');

        let sortedSpots = [];
        sortedSpots = [...spots].sort((a,b)=>{
           return a.average_cost - b.average_cost;
        })
        setSpots(sortedSpots);

    }


    const handleDelete = (id) => {

        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://caravan-tales-server.vercel.app/allspots/${id}`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount>0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Spot has been deleted.",
                            icon: "success"
                          });
                    const remaining = spots.filter(spot => spot._id !== id);
                    setSpots(remaining)
                    }
                    
                   
                })
              
            }
          });
    }

    return (
        <div>
            <div className="mt-12 width-fixer">

<h1 className="text-3xl font-bold text-center mb-2">Tourist Spots That You Have Added</h1>
<p className="text-center mb-6">Thanks For Your Contribution</p>

        <div className="flex justify-center mb-16">
        <details className="dropdown">
  <summary className="m-1 btn">Sort Spots</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><button onClick={handleSort}>Average Cost</button></li>
  </ul>
</details>
        </div>


        <div>
        <div className="overflow-x-auto">
  <table className="table table-xs">
    <thead>
      <tr>
        <th></th> 
        <th>Spot Name</th> 
        <th>Country Name</th> 
        <th>Average Cost</th> 
        <th>Travel Time</th> 
        <th>Update</th> 
        <th>Delete</th>
      </tr>
    </thead> 
    <tbody>


      {
        spots.map((spot,index)=><tr key={index}>
            <th>{index+1}</th> 
            <td>{spot.tourists_spot_name}</td> 
            <td>{spot.country_Name}</td> 
            <td>{spot.average_cost}</td> 
            <td>{spot.travel_time}</td> 
            <td><Link to={'/update'} className="btn bg-green-400 text-white">Update</Link></td>
            <td><button onClick={()=>handleDelete(spot._id)} className="btn bg-red-400 text-white">Delete</button></td>
            
          </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">




</div>
</div>
        </div>
    );
};

export default MyList;