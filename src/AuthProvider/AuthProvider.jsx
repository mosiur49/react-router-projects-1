import React, { createContext, useContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


const auth= getAuth(app)
 
 export const AuthContext= createContext(null)
 const googleProvider =new GoogleAuthProvider()
 const githubProvider=new GithubAuthProvider()

const AuthProvider = ({children}) => {
    const [user,setUser] =useState(null)
    const [loading,setLoading]=useState(true)
     
       //Register
       const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
       }

       //SignIn
       const signIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
       }

       //logout
       const logout =() =>{
        return signOut(auth)
       }


    //google sign up
    const signInWithGoogle =()=>{
        setLoading(true)
        return signInWithPopup (auth,googleProvider)
    }

    //github sign in
    const githubLogin =()=>{
        setLoading(true)
        return signInWithPopup(auth,githubProvider)
    }

    //observ auth state change
    useEffect( ()=>{
       const unscriber= onAuthStateChanged(auth,currentUser =>{
            console.log('auth state change',currentUser)
            setUser(currentUser)
        })
        return ()=>{
            unscriber()
        }
    },[])

    const authinfo={
        user,
        signInWithGoogle,
        createUser,
        signIn,
        githubLogin,
        logout

    }
    return (
        <div>

            <AuthContext.Provider value={authinfo}>
               {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;