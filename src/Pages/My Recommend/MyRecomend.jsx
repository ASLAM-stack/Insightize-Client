import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { CgLayoutGrid, CgLayoutGridSmall, CgLayoutList } from "react-icons/cg";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyRECart from "./MyRECart";
import { AiOutlineDelete } from "react-icons/ai";
import Loading from "../../Share/Loading";
import NoData from "../../Share/NoData";

 

const MyRecomend = () => {
     
    const {user} = useContext(AuthContext)
    
    const {data,isLoading,refetch} =useQuery({
        queryKey:['recommended'],
          queryFn:async () =>{
            const res= await fetch(`http://localhost:5000/my_recommendation/${user.email}`)
            const data = await res.json()
            return data ;
          }
      })
      console.log(data);
    return (
        <div className="mt-12">
            <Helmet>
                <title> My Rcommendation</title>
            </Helmet>
            <div className="text-center">
                <h1 className="md:text-6xl text-4xl font-robo font-bold">Recommended <span className="text-[#29bd36]">Product</span></h1>
                <p className="text-lg">Explore more and find product which suits you more</p>
            </div>
        
            <div>
            <h1>Booking:{data?.length}</h1>
            </div>
            <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <AiOutlineDelete className="text-3xl text-[red]" />
              </th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Date</th>
              <th>Query User</th>
               
            </tr>
          </thead>
          <tbody>
          {
    isLoading ? (
        <Loading />
    ) : data.length === 0 ? (
        <NoData />
    ) : (
        data?.map(item => (
            <MyRECart
              key={item._id}
              item={item} refetch={refetch}
              
          ></MyRECart>
          
        ))
    )
}

            
          </tbody>
        </table>
      </div>
            
        </div>
    );
};

export default MyRecomend;