import { createContext, useEffect, useState } from "react";
import app from "../firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const authContext= createContext();

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user, setUser]= useState(null);
    
    const createNewUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const userLogin=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        return signOut(auth);
    }
    const authInfo={
        user,
        setUser,
        createNewUser,
        auth,
        logOut,
        userLogin
    }

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        });
        return()=>{
            unsubscribe();

        };

    },[])
    return <authContext.Provider value={authInfo}>
        {children}
    </authContext.Provider>
      
   
};

export default AuthProvider;