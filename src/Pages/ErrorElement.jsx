import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

 

const ErrorElement = () => {
    return (
        <div>
               <div>
            <Helmet>
                <title>ERROR</title>
            </Helmet>
            <div className="cont-404 flex flex-col items-center justify-center h-[80vh]">
                
                <img className="w-8/12" src="/404.gif" alt="" />
            
            
            <Link to='/' className="px-2 py-2 md:px-3 md:py-3 border-none rounded-lg cursor-pointer text-white bg-[#9253ff] hover:bg-[#7e57c2] font-medium ">Back to Home</Link>
        </div>
        </div>
        </div>
    );
};

export default ErrorElement;