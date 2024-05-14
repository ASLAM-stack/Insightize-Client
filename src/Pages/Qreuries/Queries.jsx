import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

 

const Queries = () => {
    const queries = useLoaderData()
    console.log(queries);
    return (
        <div className="mt-12">
            <Helmet>
                <title>All Queries</title>
            </Helmet>
            <div className="text-center">
                <h1 className="md:text-6xl text-4xl font-robo font-bold">All Products <span className="text-[#29bd36]">Queries</span></h1>
                <p className="text-lg">Explore more and find product which suits you more</p>
            </div>
            
        </div>
    );
};

export default Queries;