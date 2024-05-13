import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../FireBase/firebase.config";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";


const Register = () => {
    const [show, setShow] = useState(false)

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
    
        if (password.length < 6) {
            toast.warn("password length must be 6 characters");
            return
        }
        if (!/[A-Z]/.test(password)) {
            toast.warn('password must have an upperCase letter')
            return;
        }
        if (!/[a-z]/.test(password)) {
            toast.warn('you need to must type a lowerCase letter')
            return;
        }

        console.log(name, email, password, photo)

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    title: 'Success!',
                    text: 'User created successfully!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                });
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                }).then(() => {
                    // Profile updated!
                    // ...
                    navigate('/')
                })
                .catch((error) => {
                    console.error(error)
                });

            })
            .catch(error => console.error(error))
    }

    const handleGoogleSignIn = (e) => {
        e.preventDefault()

        signInWithPopup(auth,googleProvider)
        .then(result =>{
            console.log(result.user)
            Swal.fire({
                title: 'Success!',
                text: 'User created successfully!',
                icon: 'success',
                confirmButtonText: 'Ok'
            });
            
        })
        .catch(error => console.error(error))
    }

    const handleGithubSignIn =(e)=>{
        e.preventDefault();
        signInWithPopup(auth,githubProvider)
        .then(result =>{
            console.log(result.user)
            Swal.fire({
                title: 'Success!',
                text: 'User created successfully!',
                icon: 'success',
                confirmButtonText: 'Ok'
            });
        })
        .catch(error => console.error(error))

    }


    return (
        <div>
             <div className="w-full flex items-center justify-center min-h-screen p-2 md:p-0">
                <Helmet>
                    <title>
                        Register Now
                    </title>
                </Helmet>
            <div className="md:w-[50%] p-5 md:p-20 w-full  rounded-md shadow mb-12 mt-12 logInFOrm">
                <div className="text-center mb-2">
                    <h1 className=" text-4xl font-bold mb-2">Register Now</h1>
                    <p className="text-sm dark:text-gray-600">Register to access all of our features...</p>
                </div>
                <form onSubmit={handleRegister}  className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm">
                            Full Name
                        </label>
                        <input id="name" type="text" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"  />
                        
                    </div>
                    <div>
                        <label htmlFor="photo" className="block mb-2 text-sm">
                            Photo Url
                        </label>
                        <input id="photo" name="photo" type="url" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"  />
                         
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm">
                            Email adrress
                        </label>
                        <input id="email" name="email" type="email" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"  />
                        
                    </div>
                  <div>
                  <div className="flex justify-between mb-2">
                        <label htmlFor="password" className="text-sm">
                            Password
                        </label>
                        
                    </div>
                    <div className="relative">
                        <input name="password" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" type={show ? "text": "password"} />
                        
                        {
                            show ? <FiEye className="absolute right-5 top-3 text-lg font-bold " onClick={()=>{
                                setShow(!show)
                            }} /> : <FiEyeOff className="absolute right-5 top-3 text-lg font-bold " onClick={()=>{
                                setShow(!show)}}/>
                        }
                    </div>
                  </div>
                    <div>
                        <button  className="btn w-full px-8 py-3 font-semibold rounded-md bg-blue-600 text-gray-50">Register</button>

                    </div>
                    <div>
                        <p className="px-6 text-sm text-center text-gray-600"> Already have an account yet? <Link to='/login' className="hover:underline font-bold text-lg text-violet-600  font-robo">Log in</Link></p>
                    </div>
                </form>
                <div className="divider divider-primary font-medium font-robo">Sign with</div>
                <div className="space-y-4">
                    <button onClick={handleGoogleSignIn} className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg border border-blue-gray-500 text-blue-gray-500 hover:opacity-75 focus:ring focus:ring-blue-gray-200 active:opacity-[0.85] flex items-center w-full gap-3">
                        <img src="https://docs.material-tailwind.com/icons/google.svg" alt="" className="h-6 w-6"/>
                        Continue with Google
                    </button>
                    <button onClick={handleGithubSignIn} className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg border border-blue-gray-500 text-blue-gray-500 hover:opacity-75 focus:ring focus:ring-blue-gray-200 active:opacity-[0.85] flex items-center w-full gap-3 relative">
                        
                        Continue with GitHub
                        <span className="absolute right-0 grid h-full w-12 place-items-center bg-light-blue-600 transition-colors group-hover:bg-light-blue-700">
                        <FaGithub className="text-3xl"/>
                        </span>
                    </button>

                </div>
            </div>
        </div>
        <ToastContainer />
        </div>
    );
};

export default Register;