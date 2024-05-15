import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

 

const PrivateRouter = ({children}) => {
    const {user,loader} =useContext(AuthContext)
    const location = useLocation()
    if(loader){
        return <span className="loading loading-spinner loading-lg"></span>;
    }

    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login" replace></Navigate>
};

export default PrivateRouter;