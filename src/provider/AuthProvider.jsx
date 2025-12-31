import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser=(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

      useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth, (currentUser)=>{

        setUser(currentUser);
        setLoading(false);
       

       });
       return ()=>{
        unsubscribe();
       }
    },[])

    const updateUser = (updatedData)=>{
        return updateProfile(auth.currentUser, updatedData);
    }
     
     const logOut = ()=>{
        return signOut(auth);
    }

    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        logIn,
        loading,
        setLoading,
        updateUser
    }
    return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;