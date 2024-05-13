import { Outlet } from "react-router-dom";
import Navber from "../Share/Navber";
import Footer from "../Share/Footer";

 

const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <div className="container">
            <Outlet></Outlet>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Root;