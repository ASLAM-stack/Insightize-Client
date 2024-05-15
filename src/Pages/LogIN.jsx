import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaGithub } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link,  useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import auth from "../FireBase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const LogIN = () => {
    const [show, setShow] = useState(false)
    const { signInUser } = useContext(AuthContext)
    const navigate =useNavigate()
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        signInUser(email, password)
        .then(result => {
            console.log(result.user);
            Swal.fire({
                title: 'Success!',
                text: 'Login successful!',
                icon: 'success',
                confirmButtonText: 'Ok'
            });
            navigate('/')
        })
        .catch(error => {
            console.log(error);
            Swal.fire({
                title: 'Error!',
                text: 'Please provide a registered email and password',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        });    
    };

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
            navigate('/')
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
            navigate('/')
        })
        .catch(error => console.error(error))

    }

    return (
        <div>
             <div className="w-full flex items-center justify-center min-h-screen p-2 md:p-0">
                <Helmet>
                    <title>
                        Log In
                    </title>
                </Helmet>
            <div className="md:w-[50%] md:p-20 p-5 w-full  rounded-md shadow logInFOrm mb-10 mt-10">
                <div className="text-center mb-2">
                    <h1 className=" text-4xl font-bold mb-2">Log in</h1>
                    <p className="text-sm dark:text-gray-600">Log in to access your account</p>
                </div>
                <form onSubmit={handleLogin}    className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm">
                            Email adrress
                        </label>
                        <input id="email" type="email" name="email" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
                         
                    </div>
                  <div>
                  <div className="flex justify-between mb-2">
                        <label htmlFor="password" className="text-sm">
                            Password
                        </label>
                        <a href="#" className="text-xs hover:underline text-gray-600">
                            Forgot password
                        </a>
                    </div>
                    <div className="relative">
                        <input className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" name="password" type={show ? "text": "password"} />
                        {
                            show ? <FiEye className="absolute right-5 top-3 text-lg font-bold " onClick={()=>{
                                setShow(!show)
                            }} /> : <FiEyeOff className="absolute right-5 top-3 text-lg font-bold " onClick={()=>{
                                setShow(!show)}}/>
                        }
                    </div>
                  </div>
                    <div>
                        <button type="submit" className="btn w-full px-8 py-3 font-semibold rounded-md bg-blue-600 text-gray-50">Log in</button>

                    </div>
                    <div>
                        <p className="px-6 text-sm text-center text-gray-600"> Don&#39;t have an account yet? <Link to='/register' className="hover:underline font-bold font-robo text-lg text-violet-600">Sign up</Link></p>
                    </div>
                </form>
                <div className="divider divider-primary font-medium font-robo">Sign with</div>
                <div className="space-y-4">
                    <button onClick={handleGoogleSignIn} className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg border border-blue-gray-500 text-blue-gray-500 hover:opacity-75 focus:ring focus:ring-blue-gray-200 active:opacity-[0.85] flex items-center w-full gap-3"  >
                        <img src="https://docs.material-tailwind.com/icons/google.svg" alt="" className="h-6 w-6"/>
                        Continue with Google
                    </button>
                    <button onClick={handleGithubSignIn} className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg border border-blue-gray-500 text-blue-gray-500 hover:opacity-75 focus:ring focus:ring-blue-gray-200 active:opacity-[0.85] flex items-center w-full gap-3 relative"  >
                        
                        Continue with GitHub
                        <span className="absolute right-0 grid h-full w-12 place-items-center bg-light-blue-600 transition-colors group-hover:bg-light-blue-700">
                        <FaGithub className="text-3xl"/>
                        </span>
                    </button>

                </div>
            </div>
        </div>
        </div>
    );
};

export default LogIN;