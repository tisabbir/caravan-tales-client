import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { Tooltip } from "react-tooltip";


const TopNav = () => {
  const {user, logOut,  loading} = useAuth();
  console.log('from navbar', user);
  const handleLogOut = () => {
    logOut()
    .then(() => {
      console.log('Successfully logged out')
    })
    .catch(err => {
      console.log(err)
    })
  }
    return (
        <div>
            <div className="navbar bg-base-100 width-fixer rounded-b-xl">
  <div className="flex-1">
    <Link to={'/'} data-tooltip-id="my-tooltip-multiline"
  data-tooltip-html="Caravan Tales: <br /> Your go-to hub for <br /> discovering amazing tourist spots <br /> across Central Asia." className="btn btn-ghost text-xl">Caravan Tales</Link>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    

    {
      user ? 
      
      <div className="dropdown dropdown-end">
        


      {/* avatar */}
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        

        <a
  data-tooltip-id="my-tooltip-data-html"
  data-tooltip-html="Click to get the logout option."
>
<img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
</a>
      </div>
    </div>
    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
      <li>
        <a className="justify-between">
         {user.displayName}
          
        </a>
      </li>
      <li><a onClick={handleLogOut} >Logout</a></li>
    </ul>
  </div> :  <div>
        {/* login register */}
        
        <button className="btn">
        <NavLink to={"/login"}>Login</NavLink>
      </button>
      <button className="btn">
        <NavLink to={"/register"}>Register</NavLink>
      </button>
    </div>
    }
    


    


  </div>
</div>
<Tooltip id="my-tooltip-data-html" />
        </div>
    );
};

export default TopNav;