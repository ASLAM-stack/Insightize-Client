import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const UpdateQuery = () => {
    const product = useLoaderData()
    console.log(product);
    const {user,loader} = useContext(AuthContext);
    
    const {_id,product_Name,product_Brand,product_Image,query_Title,boycott_Reason } = product;

    const currentDateAndTimeInMillis = Date.now();
    const currentDateAndTime = new Date(currentDateAndTimeInMillis);
    console.log(currentDateAndTime);
     
    const handleAddQuery = e =>{
        e.preventDefault()
        const form = e.target;
        const product_Name = form.productName.value;
        const product_Brand = form.productBrand.value;
        const product_Image = form.productImage.value;
        const query_Title = form.queryTitle.value;
        const boycott_Reason = form.boycottReason?.value;
        const {displayName,email,photoURL} = user;
        const queryInfo = {product_Name,product_Brand,product_Image,query_Title,boycott_Reason,currentDateAndTime}
        console.log(queryInfo);
        fetch(`http://localhost:5000/update/${_id}`,{
            method:"PUT",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(queryInfo)
        })
        .then(res => res.json())
        .then( data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'update successfully!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                });
                form.reset()
            }
        })
        
         

    }
    if (loader) {
        return <div className="flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    return (
        <div>
            <div className="bg-[#64646411] py-8  md:p-8 rounded-xl shadow-lg my-12">
      <Helmet>
        <title>Update Query</title>
      </Helmet>
      <h1 className="text-center text-4xl md:text-6xl font-bold">Update Query</h1>
      <form onSubmit={handleAddQuery}   className=" p-4 md:p-10">
        <div className="flex gap-6 flex-wrap justify-between">
          <div className="w-full space-y-4">
            <div>
              <label htmlFor="productName" className="block mb-2 text-sm font-bold">
                Product Name
              </label>
              <input defaultValue={product_Name}
                id="productName"
                type="text"
                name="productName"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              required/>
            </div>
            <div>
              <label htmlFor="productBrand" className="block mb-2 text-sm font-bold">
                Product Brand
              </label>
              <input defaultValue={product_Brand}
                id="productBrand"
                type="text"
                name="productBrand"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              required/>
            </div>
            <div>
              <label htmlFor="productImage" className="block mb-2 text-sm font-bold">
                Product Image-URL
              </label>
              <input defaultValue={product_Image}
                id="productImage"
                type="url"
                name="productImage"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              required/>
            </div>
            <div>
              <label htmlFor="queryTitle" className="block mb-2 text-sm font-bold">
                Query Title
              </label>
              <input defaultValue={query_Title}
                id="queryTitle"
                type="text"
                name="query_Title"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              required/>
            </div>
            <div>
              <label htmlFor="boycottReason" className="block mb-2 text-sm font-bold">
                Boycotting Reason Details
              </label>
              <textarea defaultValue={boycott_Reason}
                id="boycottReason" rows='8'
                type="text"
                name="boycottReason"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              required>
              </textarea>
            </div>
          
            
          </div>
    
 
        </div>
        <input className="btn text-lg font-medium bg-[#47b3f1] w-full mt-6" type="submit" value="Update Product Query" />
      </form>
    </div>
        </div>
    );
};

export default UpdateQuery;