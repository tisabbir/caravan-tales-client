

const UpdateSpot = () => {

    const handleUpdate = (e) => {
        e.preventDefault();

    }
    return (
        <div>
            <div className="pt-12  bg-[#EFEEDB]">
                <h1 className="text-2xl text-center font-bold">Update Your Spot Information</h1>
                <h1 className="text-xl text-center">Please Fill Up the Form Patiently</h1>
            <form onSubmit={handleUpdate} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto  pt-6 pb-12 width-fixer">


                 <input name="url" type="url" placeholder="Image URL" className="input input-bordered w-full" />
                 <input name="spot" type="text" placeholder="SPOT Name" className="input input-bordered w-full  " />
                 <input name="country" type="text" placeholder="Country Name" className="input input-bordered w-full  " />
                 <input name="location" type="text" placeholder="Location" className="input input-bordered w-full  " />
                 <input name="description" type="text" placeholder="Short Description" className="input input-bordered w-full  " />
                 <input name="cost" type="number" placeholder="Average Cost USD" className="input input-bordered w-full  " />
                 <input name="season" type="text" placeholder="Seasonality" className="input input-bordered w-full  " />
                 <input name="time" type="text" placeholder="Travel Time" className="input input-bordered w-full  " />
                 <input name="visitors" type="text" placeholder="Travel Visitors Per Year" className="input input-bordered w-full  " />
                 


                 <input type="submit" value={"Update"} className="btn w-full bg-green-400 col-span-1 md:col-span-2 lg:col-span-3" />


            </form>
        </div>
        </div>
    );
};

export default UpdateSpot;