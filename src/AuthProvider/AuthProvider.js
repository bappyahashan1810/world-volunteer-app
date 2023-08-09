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
            const loggedUser = { email: cureentUser.email };
            if (cureentUser) {
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loggedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('register-user', data.token);
                    })

            }
            else {
                localStorage.removeItem('register-user');
            }
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