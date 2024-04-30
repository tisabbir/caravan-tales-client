

const AddSpot = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const image = form.url.value;
        const country = form.country.value;
        const spot = form.spot.value;
        const location = form.location.value;
        const description = form.description.value;
        const cost = form.cost.value;
        const season = form.season.value;
        const time = form.time.value;
        const visitors = form.visitors.value;

        const userSpot = {
            name, email, image, country, spot, location, description, cost, season, time, visitors
        }
        console.log(userSpot);

        
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
                 <input name="email" type="email" placeholder="User Email" className="input input-bordered w-full  " />
                 <input name="name" type="text" placeholder="User Name" className="input input-bordered w-full  " />
                 <input type="submit" value={"ADD"} className="btn w-full bg-green-400" />


            </form>
        </div>
    );
};

export default AddSpot;