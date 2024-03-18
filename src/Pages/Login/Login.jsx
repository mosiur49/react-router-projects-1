import { Link, useNavigate } from 'react-router-dom';
   
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
  const {signIn,signInWithGoogle,githubLogin}=useContext(AuthContext);
  const navigate=useNavigate()

  const handleGoogleSignIn=() =>{
    signInWithGoogle()
    .then(result =>{
      const logged=result.user
      console.log(logged)
    })
    .catch(error =>{
      console.log(error)
    })
  }
  const handleGithubSignIn=() =>{
    githubLogin()
    .then(result =>{
      const logged=result.user
      console.log(logged)
    })
    .catch(error =>{
      console.log(error)
    })
  }

  const handleSignIn =event =>{
      event.preventDefault()
      const form =event.target;
      const email=form.email.value;
      const password=form.password.value;
      console.log(email,password)

      signIn(email,password)
      .then(() =>{
        toast.success('User created successfully');
        navigate('/')
      })
      .catch(error =>{
        toast.error(error.message)
      })


  }
    return (
        <div>
          
          <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignIn} className="card-body">
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
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className='mb-4 ml-8'>
      <Link to="/signup" className="label-text-alt link link-hover">
      New to Auth master?  pleace Register
      </Link>
      </p>
     <div className='flex justify-between px-3'>
     <div>
      <button onClick={handleGoogleSignIn} className="btn btn-active btn-accent btn-sm mb-3 ml-7 btn-primary">signIn google</button>
      </div>
      <div>
      <button onClick={handleGithubSignIn} className="btn btn-active btn-accent btn-sm mb-3 ml-7 btn-primary">signIn Github</button>
      </div>
     </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;