import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { formatDate, parseISO } from "date-fns";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import NoData from "../../../Share/NoData";
import QRecommendCard from "./QRecommendCard";
import Loading from "../../../Share/Loading";
 
 
 
const QueryDetails = () => {
  const product = useLoaderData();
  const { user } = useContext(AuthContext);
  const [reCount,setReCount] = useState(0)
  useEffect(()=>{
    setReCount(product.recommendationCount);
  },[product.recommendationCount])
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
  } = product;
 
  const dateStr = currentDateAndTime;
  const dateObj = parseISO(dateStr);
  const date = formatDate(dateObj, "MMMM do yyyy, h:mm a");
  const currentDateAndTimeInMillis = Date.now();
    const DateAndTime = new Date(currentDateAndTimeInMillis);
    const {data,isLoading,refetch} =useQuery({
      queryKey:["queryID"],
        queryFn:async () =>{
          const res= await fetch(`http://localhost:5000/recommends/${_id}`)
          const data = await res.json()
          return data ;
        }
    })
  const handleRecom = e => {
    e.preventDefault()
    const form = e.target;
    const Recommend_Product_Name = form.productName.value;
    const Recommend_Product_Image = form.productImage.value;
    const Recommend_Product_Title = form.Recommend_Title.value;
    const Recommend_Product_Reason = form.Recommend_Reason.value;
    const queryID = _id;
    const productNew_Name = product_Name;
    const userEmail =email;
    const userName = displayName;
    const RecommenderEmail =user.email;
    const RecommenderName =user.displayName;
    const RecoInfo = {Recommend_Product_Name,Recommend_Product_Image,Recommend_Product_Title,Recommend_Product_Reason,queryID,productNew_Name,userEmail,userName,RecommenderEmail,RecommenderName,DateAndTime}
    console.log(RecoInfo);
    fetch('http://localhost:5000/recommend',{
            method:"POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(RecoInfo)
        })
        .then(res => res.json())
        .then( data => {
            console.log(data);
            if (data.insertedId) {
              let newCount = reCount + 1;
              setReCount(newCount)

              fetch(`http://localhost:5000/product/update/${_id}`,{
                method:"PUT",
                headers:{
                  "content-type" : "application/json"
                },
                body:JSON.stringify({ recommendationCount_New: newCount })
              })
              .then(res =>res.json())
              .then(data => {
                console.log(data);
                if (data.modifiedCount > 0){
                  Swal.fire({
                    title: 'Success!',
                    text: 'Add Recommendation successfully!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                });
                form.reset()
                refetch()
                }
              })   
            }
        })      
  }
 
  console.log(data);
  return (
    <div className="p-4 md:p-0 mb-10">
      <Helmet>
        <title>{product_Name}</title>
      </Helmet>
      <div className="text-center mt-12 ">
        <h1 className="md:text-6xl text-4xl font-robo font-bold">
          Query <span className="text-[#29bd36]">Details</span>
        </h1>
        <p className="text-lg mt-2">{product_Name}</p>
      </div>
      <div className="grid md:grid-cols-2 items-center grid-cols-1 gap-4 p-4  shadow rounded mt-4">
        <div className="w-full">
          <div className="card w-full">
            <figure>
              <img src={product_Image} alt={product_Image} />
            </figure>
            <div className="card-body">
              <div className="flex gap-4 flex-wrap">
                <p className="font-medium">
                  Date : <span>{date.slice(0, 13)}</span>
                </p>
                <p className="font-medium">
                  Time : <span>{date.slice(15, 30)}</span>
                </p>
              </div>
              <p>{query_Title}</p>
              <h2 className="card-title">{product_Name}</h2>
              <h2 className="card-title">{product_Brand}</h2>
              <p className="text-[#585656]">{boycott_Reason}</p>
              <div className="flex  items-center gap-4">
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src={photoURL} />
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold font-work">{displayName}</h4>
            </div>
          </div>
              <div className="card-actions">
                <p className="text-[#521414] font-semibold">
                  Recomendation: <span>{reCount}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div>
            <h1 className="text-4xl text-center font-robo mb-3">Recommendation</h1>
            <div>
              <form onSubmit={handleRecom}>
                <div className="flex gap-2 ">
                <div className="space-y-3 w-full">
                  <div>
                    <label
                      htmlFor="productName"
                      className="block mb-2 text-sm font-bold"
                    >
                      Product Name
                    </label>
                    <input
                      id="productName"
                      type="text"
                      name="productName"
                      className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="productImage"
                      className="block mb-2 text-sm font-bold"
                    >
                      Product Image
                    </label>
                    <input
                      id="productImage"
                      type="url"
                      name="productImage"
                      className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-3 w-full">
                  <div>
                    <label
                      htmlFor="Recommend_Title"
                      className="block mb-2 text-sm font-bold"
                    >
                      Recommendation Title
                    </label>
                    <input
                      id="Recommend_Title"
                      type="text"
                      name="Recommend_Title"
                      className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="Recommend_Reason"
                      className="block mb-2 text-sm font-bold"
                    >
                      Recommendation Reason
                    </label>
                    <input
                      id="Recommend_Reason"
                      type="text"
                      name="Recommend_Reason"
                      className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                      required
                    />
                  </div>
                </div>
                </div>
                <input className="btn btn-outline w-full mt-4 text-xl text-[#39ece3] outline-[#7ee940]" type="submit" value="Recommend"/>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Alternative Products</h1>
        </div>
        <div className="mt-20">
          <div>
            {
              isLoading ? <Loading></Loading>: <div>
                 {
                data && data.length === 0 ? (
                  <NoData />
                ) : (
                  <div className="space-y-8">
                    
                    {data && data?.map(item => (
                      <QRecommendCard key={item._id} item={item} />
                    ))}
                  </div>
                )
              }
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryDetails;
