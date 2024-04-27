import { Link } from "react-router-dom";
import RegisterTypeWriter from "./RegisterTypeWriter";
import Swal from "sweetalert2";
import { useContext } from "react";
import useAuth from "../Hooks/useAuth";

const Register = () => {

  const {createUserWithEmail} = useAuth();
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if(!passwordRegex.test(password)){
      Swal.fire({
        icon: "error",
        title: "You Broke The Password Rules",
        text: "Password must have at least 6 characters with at least one uppercase and one lowercase letter.",
        footer: '<a href="#">Try Again Please</a>'
      });
      return;
  }


  createUserWithEmail(email,password)
  .then(result => {
    console.log(result.user);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your Account Has Been Created Successfully",
      showConfirmButton: false,
      timer: 1500
    });
    
  })
  .catch(err => {
    console.log(err);
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Something Went Wrong. Please Try Again.",
      showConfirmButton: false,
      timer: 1500
    });
  })


    console.log(name, email, password);
  };
  return (
    <div className="hero min-h-screen bg-[#EFEEDB] py-12">
      <div className="hero-content flex-col gap-6 ">
        <div className=" ">
          <RegisterTypeWriter className="text-4xl font-bold mb-2" />
          
        </div>

        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-3xl text-center mt-4 font-bold">Caravan Tales</h1>
          <h1 className="text-xl text-center mt-2 font">Registration Form</h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="www.photo.com/example/1"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-green-400 text-white hover:text-green-400 hover:bg-white border">Register</button>
            </div>
          </form>
          <p className="text-center mb-4">
            Already have an account? Please{" "}
            <Link className="text-violet-700 " to={"/login"}>
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
