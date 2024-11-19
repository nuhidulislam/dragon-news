import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../Provider/AuthProvider";


const Register = () => {
    const {createNewUser,setUser}= useContext(authContext)
    const handleSubmit=(e)=>{
        e.preventDefault()
        // get from data
        const form = new FormData(e.target);
        const name= form.get('name');
        const photo= form.get('photo');
        const password= form.get('password');
        const email= form.get('email');
        console.log({name, photo, password,email})
        createNewUser(email,password)
        .then((result)=>{
            const user= result.user;
            setUser(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorCode, errorMessage)
          });
    }
    return (
        <div className="min-h-screen flex justify-center items-center">

            
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-center text-2xl font-bold">Register Your Account</h1>
      <form onSubmit={handleSubmit} className="card-body">
        {/* name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text"
          name='name' placeholder="Enter your name" className="input input-bordered" required />
        </div>

        {/* phote url */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phote URL</span>
          </label>
          <input type="text"
          name='photo' placeholder="Enter your Photo URL" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"
          name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password"
          name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <h1 className="text-center pb-5 font-semibold">Already have an account <Link to='/auth/login' className="text-2xl text-red-700">Login</Link></h1>
    </div>
            
        </div>
    );
};

export default Register;