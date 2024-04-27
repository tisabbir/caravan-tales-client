

const AddSpot = () => {
    return (
        <div className="pt-12  bg-[#EFEEDB]">
                <h1 className="text-2xl text-center font-bold">Add Your Favorite Tourist Spots of Central Asia</h1>
                <h1 className="text-xl text-center">Please Fill Up the Form Patiently</h1>
            <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto  pt-6 pb-12 width-fixer">


                 <input type="url" placeholder="Image URL" className="input input-bordered w-full" />
                 <input type="text" placeholder="SPOT Name" className="input input-bordered w-full  " />
                 <input type="text" placeholder="Country Name" className="input input-bordered w-full  " />
                 <input type="text" placeholder="Location" className="input input-bordered w-full  " />
                 <input type="text" placeholder="Short Description" className="input input-bordered w-full  " />
                 <input type="number" placeholder="Average Cost USD" className="input input-bordered w-full  " />
                 <input type="text" placeholder="Seasonality" className="input input-bordered w-full  " />
                 <input type="text" placeholder="Travel Time" className="input input-bordered w-full  " />
                 <input type="text" placeholder="Travel Visitors Per Year" className="input input-bordered w-full  " />
                 <input type="email" placeholder="User Email" className="input input-bordered w-full  " />
                 <input type="text" placeholder="User Name" className="input input-bordered w-full  " />
                 <input type="submit" value={"ADD"} className="btn w-full" />


            </form>
        </div>
    );
};

export default AddSpot;