import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import app from '../Firebase/firebase.config';




export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);





    const authLogIn = () => {
        setLoader(true);
        return signInWithPopup(auth, googleProvider);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, cureentUser => {
            setUser(cureentUser);
            setLoader(false);
        })
        return () => unsubscribe();
    }, [])



    const authlogOut = () => {
        return signOut(auth);
    }


    const authInfo = {
        authLogIn,
        loader,
        user,
        authlogOut
    };
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;