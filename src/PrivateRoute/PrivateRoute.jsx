import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = () => {
    const {user,loading} =useContext(AuthContext)

    if(loading)
    return <h2 className='text-2xl'>Loading...</h2>

    if(!user.email){
        return <Navigate to="/login"></Navigate>
    }
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;