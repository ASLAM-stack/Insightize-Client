import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { CgLayoutGrid, CgLayoutGridSmall, CgLayoutList } from "react-icons/cg";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import ReMeCart from "./ReMeCart";
import Loading from "../../Share/Loading";
import NoData from "../../Share/NoData";

const RecommendationMe = () => {
     
    const {user} = useContext(AuthContext)
     
    const {data,isLoading,refetch} =useQuery({
        queryKey:['recommended'],
          queryFn:async () =>{
            const res= await fetch(`http://localhost:5000/my_recommend/${user.email}`)
            const data = await res.json()
            return data ;
          }
      })
      console.log(data);
    return (
        <div className="mt-12">
            <Helmet>
                <title>Rcommendation</title>
            </Helmet>
            <div className="text-center">
                <h1 className="md:text-6xl text-4xl font-robo font-bold">Recommended <span className="text-[#29bd36]">Product</span></h1>
                <p className="text-lg">Explore more and find product which suits you more</p>
            </div>
            <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
               
              <th>Image</th>
              <th>Product Name</th>
              <th>Date</th>
              <th>Rcommender</th>
               
            </tr>
          </thead>
          <tbody>
          {
    isLoading ? (
        <Loading />
    ) : data.length === 0 ? (
        <NoData />
    ) : (
        data.map(item => (
            <ReMeCart
                key={item._id}
                item={item}
                refetch={refetch}
            />
        ))
    )
}
            
          </tbody>
        </table>
      </div>
            
        </div>
    );
};

export default RecommendationMe;