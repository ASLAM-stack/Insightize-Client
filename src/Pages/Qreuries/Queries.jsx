import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import QueriesCard from "./Component/QueriesCard";
import { useState } from "react";
import { CgLayoutGrid, CgLayoutGridSmall, CgLayoutList } from "react-icons/cg";

 

const Queries = () => {
    const queries = useLoaderData()
    console.log(queries);
    const [sort,setSort] = useState(3)
    const handleOne = () =>{
        setSort(1)
    }
    const handleTwo = () =>{
        setSort(2)
    }
    const handleThree = () =>{
        setSort(3)
    }
    return (
        <div className="mt-12">
            <Helmet>
                <title>All Queries</title>
            </Helmet>
            <div className="text-center">
                <h1 className="md:text-6xl text-4xl font-robo font-bold">All Products <span className="text-[#29bd36]">Queries</span></h1>
                <p className="text-lg">Explore more and find product which suits you more</p>
            </div>
            <div className="flex justify-center gap-4 mt-4">
            <CgLayoutGrid onClick={handleThree} className="text-4xl" />
            <CgLayoutGridSmall onClick={handleTwo} className="text-4xl" />
            <CgLayoutList onClick={handleOne} className="text-4xl" />
            </div>
            <div className={`mt-12 grid ${
  sort == 1 ? 'md:grid-cols-1' :
  sort == 2 ? 'md:grid-cols-2' :
  sort == 3 ? 'md:grid-cols-3' :
  ''} gap-5 grid-cols-1 p-2 md:p-0`}>
                {
                    queries.map(item =><QueriesCard key={item._id} item={item}></QueriesCard>)
                }
            </div>
            
        </div>
    );
};

export default Queries;