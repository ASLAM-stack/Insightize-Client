import { useContext, useState } from "react";
import { Fade, JackInTheBox, Rotate } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import { CgLayoutGrid, CgLayoutGridSmall, CgLayoutList } from "react-icons/cg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import MyQueryCart from "./Component/MyQueryCart";

 

const MyQueries = () => {
    const { user } = useContext(AuthContext);

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
     
    const {data,isLoading,refetch} =useQuery({
        queryKey:['email'],
          queryFn:async () =>{
            const res= await fetch(`http://localhost:5000/my_query/${user.email}`)
            const data = await res.json()
            return data ;
          }
      })
      console.log(data);
      console.log(user);
       
    return (
        <div>
            <Helmet>
                <title>My Queries</title>
            </Helmet>
            <div className=" space-y-4 w-full pl-4 md:pl-16 h-[500px] bg-cover flex flex-col justify-center bg-center rounded-2xl  mt-12 banner_my">
                         <div className="space-y-2 border-l-2 pl-4 border-[#c65ce0d2]">
            <JackInTheBox direction='down' triggerOnce={true}>
              <p className="text-xl font-medium  text-[#e64210ec]">Welcome to <span className="font-satis"> Insightize</span></p>
              </JackInTheBox>
              <Rotate triggerOnce={true} delay={2}>
              <h1 className="md:text-7xl font-bold text-white font-robo text-2xl">
              Boycott the product <br /> Stand with humanity
              </h1>
              </Rotate>
              
              <Fade direction='up' triggerOnce={true}>
              <Link to='/add_query' className="btn btn-outline btn-secondary">
                Add Query</Link>
              </Fade>
            </div>
            
        </div>
        <div>
        <div className="text-center mt-10">
                <h1 className="md:text-6xl text-4xl font-robo font-bold">My <span className="text-[#29bd36]">Queries</span></h1>
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
                    data?.map(item =><MyQueryCart key={item._id} item={item}></MyQueryCart>)
                }
            </div>
        </div>
        </div>
    );
};

export default MyQueries;