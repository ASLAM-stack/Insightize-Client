import { useEffect, useState } from "react";
import RecentCard from "./RecentCard";



const RecentQuery = () => {
    const [query,setQuery] = useState([])
     useEffect(()=>{
        fetch('https://insightize-server.vercel.app/recentadd')
        .then(res=> res.json())
        .then(result => {
            setQuery(result)
        })
     },[])
     console.log(query);
    return (
        <div className="mt-24">
            <div className="text-center">
                <h1 className="md:text-6xl text-4xl font-robo font-bold">Our Recent <span className="text-[#29bd36]">Queries</span></h1>
                <p className="text-lg">Explore more and find product which suits you more</p>
            </div>
            <div className="mt-12 grid md:grid-cols-3 gap-5 grid-cols-1 p-2 md:p-0">
                {
                    query.map(item =><RecentCard key={item._id} item={item}></RecentCard>)
                }
            </div>
        </div>
    );
};

export default RecentQuery;