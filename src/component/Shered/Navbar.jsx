import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Navbar = () => {
    const {user,logout} =useContext(AuthContext)

    const handleLogOut=()=>{
        logout()
        .then(result =>{
            console.log(result)
        })
    }
    return (
        <div>
            <nav className="flex justify-between items-center py-6 px-14 shadow-md  ">
                <h2 className=' text-2xl'>Phone Shape</h2>
                <ul className='flex gap-5 text-2xl'>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " text-orange-600 underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/favarate"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " text-orange-600 underline" : ""
                            }
                        >
                        Favarate
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " text-orange-600 underline" : ""
                            }
                        >
                        Login
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/signup"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " text-orange-600 underline" : ""
                            }
                        >
                        Register
                        </NavLink>
                    </li>
                    <p className='text-red'>{user?. email}</p>
                    <li>
                    <NavLink>
                        <button onClick={handleLogOut}>Logout</button>
                    </NavLink>
                </li>
                </ul>
                
            </nav>
        </div>
    );
};

export default Navbar;