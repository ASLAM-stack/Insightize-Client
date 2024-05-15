import { formatDate, parseISO } from "date-fns";
import '../../Home/Component/Home.css'
const QRecommendCard = ({item}) => {
    console.log(item);
     const {Recommend_Product_Image,Recommend_Product_Name,Recommend_Product_Title,Recommend_Product_Reason,DateAndTime,RecommenderName} = item;
     const dateStr = DateAndTime;
     const dateObj = parseISO(dateStr);
     const date = formatDate(dateObj, "MMMM do yyyy, h:mm a");
    return (
        <div className="card card-side bg-base-100 shadow-xl">
   <img className="w-[35%] h-[300px]" src={Recommend_Product_Image}  alt={Recommend_Product_Name} /> 
  <div className="card-body w-[45%]">
    <h2 className="card-title">{Recommend_Product_Name}</h2>
    <p> {Recommend_Product_Title}</p>
    <p>{Recommend_Product_Reason}</p>
    <div>
        <h1 className="text-lg font-bold">Recommender Name: {RecommenderName}</h1>
        <p>Recommendation Date : {date}</p>
    </div>
  </div>
</div>
    );
};

export default QRecommendCard;