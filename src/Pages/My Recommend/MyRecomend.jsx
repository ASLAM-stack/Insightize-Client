import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { CgLayoutGrid, CgLayoutGridSmall, CgLayoutList } from "react-icons/cg";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyRECart from "./MyRECart";

 

const MyRecomend = () => {
    const [sort,setSort] = useState(3)
    const {user} = useContext(AuthContext)
    const handleOne = () =>{
        setSort(1)
    }
    const handleTwo = () =>{
        setSort(2)
    }
    const handleThree = () =>{
        setSort(3)
    }
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
                <title>Rcommendation</title>
            </Helmet>
            <div className="text-center">
                <h1 className="md:text-6xl text-4xl font-robo font-bold">Recommended <span className="text-[#29bd36]">Product</span></h1>
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
                    data?.map(item=> <MyRECart key={item._id} item={item}></MyRECart>)
                }
            </div>
            
        </div>
    );
};

export default MyRecomend;