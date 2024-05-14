import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";

 

const QueryDetails = () => {
    const product = useLoaderData()
    const {user} = useContext(AuthContext);
    const {
        _id,
        email,
        boycott_Reason,
        currentDateAndTime,
        displayName,
        photoURL,
        product_Brand,
        product_Image,
        product_Name,
        query_Title,
        recommendationCount
      } = product;
      console.log(user);
    console.log(product);
    return (
        <div>
            <Helmet>
                <title>
                    {product_Name}
                </title>
            </Helmet>
            <div className="text-center mt-12">
                <h1 className="md:text-6xl text-4xl font-robo font-bold">Query <span className="text-[#29bd36]">Details</span></h1>
                <p className="text-lg mt-2">{product_Name}</p>
            </div>
        </div>
    );
};

export default QueryDetails;