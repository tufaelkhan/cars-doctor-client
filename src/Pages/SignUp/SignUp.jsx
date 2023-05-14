import { Link } from "react-router-dom";
import log from '../../assets/images/login/login.svg'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "../Shared/Social/SocialLogin";

const SignUp = () => {
const {createUser} = useContext(AuthContext)

    const handleSignUp = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, email, password);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.log(error))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="mr-12 w-1/2">
          <img src={log} className='' alt="" />
          </div>
          <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <h1 className="text-4xl font-bold text-center">Sign Up</h1>
         <form onSubmit={handleSignUp}>
         <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="name" className="input input-bordered" />
              </div>
         <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input type="submit" className="btn btn-primary" value="Sign Up" />
              </div>
         </form>
              <h2 className='my-3 text-center'>Already Have an Account <Link to='/login' className='text-orange-600 font-bold'>Login</Link></h2>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;