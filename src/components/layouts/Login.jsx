import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../Provider/AuthProvider";



const Login = () => {
    const {userLogin, setUser}=useContext(authContext)
    const handleSubmit=(e)=>{
        e.preventDefault();
        const form= e.target;
        const email= form.email.value;
        const password= form.password.value;
        console.log({email,password})
        userLogin(email,password)
        .then((result) => {
            const user = result.user;
            setUser(user)
        })
        .catch((error)=>{
            alert(error.code);
        });

    }
    return (
        <div className="min-h-screen flex justify-center items-center">

            
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-center text-2xl font-bold">Login Your Account</h1>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
          name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input  
          name="password" type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <h1 className="text-center pb-5 font-semibold">Don't have an account <Link to='/auth/register' className="text-2xl text-red-700">Register</Link></h1>
    </div>
            
        </div>
    );
};

export default Login;


