import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../FireBase/firebase.config";
import { HelmetProvider } from "react-helmet-async";
import axios from "axios";

 
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)
     

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)

    };


    const signInUser =  (email, password) => {
        setLoader(true)
        return  signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoader(true)
        return signOut(auth)
    }

    const handleUpdateProfile = (name, photo) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        }).then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
        });
    }



    // useEffect(() => {
    //     const unSubscribe = onAuthStateChanged(auth, currentUser => {
    //         setUser(currentUser);
    //         setLoader(false)
    //     })
    //     return unSubscribe;


    // })
    useEffect (()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log(currentUser);
            setLoader(true);
            const userEmail = { email: currentUser?.email } || user?.email;
            setUser(currentUser);
            if (currentUser) {
              axios
                .post('http://localhost:5000/jwt', userEmail, {
                  withCredentials: true,
                })
                .then(res => console.log(res.data));
            } else {
              axios
                .post('http://localhost:5000/jwt/logout', userEmail, {
                  withCredentials: true,
                })
                .then(res => console.log(res.data));
            }
            setLoader(false);
          });
        return () => unSubscribe ();
    },[])




    const authInfo = {
        user,
        loader,
        createUser,
        signInUser,
        logOut,
        handleUpdateProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
        <HelmetProvider>
        {children}
        </HelmetProvider>
    
</AuthContext.Provider>
    );
};

export default AuthProvider;