import { Link } from 'react-router-dom';
import log from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
const Login = () => {
  const {signIn} = useContext(AuthContext)

    const handleLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        console.log(password, email);
        signIn(email, password)
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
            <h1 className="text-4xl font-bold text-center">Login</h1>
         <form onSubmit={handleLogin}>
         <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input type="submit" className="btn btn-primary" value="Login" />
              </div>
         </form>
              <h2 className='my-3 text-center'>New To Car Doctors <Link to='/signup' className='text-orange-600 font-bold'>Sign Up</Link></h2>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;