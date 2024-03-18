import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';


const Register = () => {
    const {user,createUser} =useContext(AuthContext)
    console.log(user)
    

    const handleRegister=event=>{
        event.preventDefault()
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password =form.password.value;
        console.log(name,email,password)

        if(password.length < 6){
            toast.error('password must be at least 6 character');
            return;
        }

        createUser(email,password)
        .then(result =>{
          const loggedUser =result.user;
          console.log(loggedUser)
          form.reset();
        })
        .then(error =>{
          console.log(error)
        })
    }

        return (
        <div>
                 <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-3xl font-bold">Register now!</h1>
      
    </div>
    <div className="card shrinhandleRegisterk-0 w-full max-w-sm shadow-2xl bg-base-1200">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
          </label>
        </div>
        <label className="label">
            <Link to="/login" className="label-text-alt link link-hover">already have an acount?</Link>
          </label>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;