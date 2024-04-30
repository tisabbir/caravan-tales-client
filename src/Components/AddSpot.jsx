import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";


const AddSpot = () => {

    const {user} = useAuth();
    console.log('user from add', user);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const userName = user.displayName;
        const userEmail= user.email;
        const image = form.url.value;
        const country_Name = form.country.value;
        const tourists_spot_name = form.spot.value;
        const location = form.location.value;
        const short_description = form.description.value;
        const average_cost = form.cost.value;
        const seasonality = form.season.value;
        const travel_time = form.time.value;
        const totalVisitorsPerYear = form.visitors.value;

        const userSpot = {
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
          } 
        console.log(userSpot);
          fetch('https://caravan-tales-server.vercel.app/allspots', {
            method: "POST",
            headers: {
                'content-type' : "application/json"
            },
            body: JSON.stringify(userSpot)
          })
          .then(res => {
            console.log(res);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Have Added Tourist Spot Successfully",
                showConfirmButton: false,
                timer: 1500
              });
            form.reset();
          })
          .catch(err => {
            console.log(err);
          })
        
    }   


    return (
        <div className="pt-12  bg-[#EFEEDB]">
                <h1 className="text-2xl text-center font-bold">Add Your Favorite Tourist Spots of Central Asia</h1>
                <h1 className="text-xl text-center">Please Fill Up the Form Patiently</h1>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto  pt-6 pb-12 width-fixer">


                 <input name="url" type="url" placeholder="Image URL" className="input input-bordered w-full" />
                 <input name="spot" type="text" placeholder="SPOT Name" className="input input-bordered w-full  " />
                 <input name="country" type="text" placeholder="Country Name" className="input input-bordered w-full  " />
                 <input name="location" type="text" placeholder="Location" className="input input-bordered w-full  " />
                 <input name="description" type="text" placeholder="Short Description" className="input input-bordered w-full  " />
                 <input name="cost" type="number" placeholder="Average Cost USD" className="input input-bordered w-full  " />
                 <input name="season" type="text" placeholder="Seasonality" className="input input-bordered w-full  " />
                 <input name="time" type="text" placeholder="Travel Time" className="input input-bordered w-full  " />
                 <input name="visitors" type="text" placeholder="Travel Visitors Per Year" className="input input-bordered w-full  " />
                 
                 {/* <input name="email" type="email" defaultValue={user.email} className="input input-bordered w-full  " />
                 <input name="name" type="text" defaultValue={user.displayName} className="input input-bordered w-full  " /> */}

                 <input type="submit" value={"ADD"} className="btn w-full bg-green-400 col-span-1 md:col-span-2 lg:col-span-3" />


            </form>
        </div>
    );
};

export default AddSpot;