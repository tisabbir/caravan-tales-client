import { Link, useNavigate } from "react-router-dom";
import LoginTypeWriter from "./LoginTypeWriter";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
  const { logInUser, logInWithGoogle, logInWithGithub, user, setUser } =
    useAuth();
    const navigate = useNavigate();
    const from = location?.state || '/';

    //GOOGLE LOGIN
    const handleGoogleLogIn = () => {
			logInWithGoogle()
			.then(res => {
				console.log(res.user);
				Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You have successfully logged in",
          showConfirmButton: false,
          timer: 1500
        });
				navigate(from);
			})
			.catch(err => {
				console.error(err);
				Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Something went wrong. Try Again!",
          showConfirmButton: false,
          timer: 1500
        });
			})
		}
    //GITHUB LOGIN
    const handleGitHubLogIn = () => {
			logInWithGithub()
			.then(res => {
				console.log(res.user);
				Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You have successfully logged in",
          showConfirmButton: false,
          timer: 1500
        });
				navigate(from);
			})
			.catch(err => {
				console.error(err);
				Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Something went wrong. Try Again!",
          showConfirmButton: false,
          timer: 1500
        });
			})
		}

    // login
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    logInUser(email, password)
		.then(res => {
			console.log(res.user)
			Swal.fire({
        position: "top-end",
        icon: "success",
        title: "You have successfully logged in",
        showConfirmButton: false,
        timer: 1500
      });
			navigate(from);
			

		})
		.catch(err => {
			console.log(err)
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Something went wrong. Try Again!",
        showConfirmButton: false,
        timer: 1500
      });
		})
  };
  return (
    <div className="hero min-h-screen bg-[#EFEEDB] py-12">
      <div className="hero-content flex-col gap-6 ">
        <div className="text-center">
          <LoginTypeWriter />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-3xl text-center mt-4 font-bold">Caravan Tales</h1>
          <h1 className="text-xl text-center mt-2 font">Login Form</h1>
          <form onSubmit={handleLogin} className="card-body">
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-green-400 text-white hover:text-green-400 hover:bg-white border">
                Login
              </button>
            </div>
          </form>
          <div className="flex justify-center mb-2 gap-4">
            <FcGoogle onClick={handleGoogleLogIn} className="text-3xl hover:opacity-50" />
            <SiGithub onClick={handleGitHubLogIn} className="text-3xl hover:opacity-50" />
          </div>
          <p className="text-center mb-4">
            New Here? Please{" "}
            <Link className="text-violet-700 " to={"/register"}>
              Register
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
