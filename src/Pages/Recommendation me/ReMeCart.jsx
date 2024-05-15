import { formatDate, parseISO } from "date-fns";
 

 

const ReMeCart = ({item}) => {
    const{Recommend_Product_Image,Recommend_Product_Name,Recommend_Product_Title,Recommend_Product_Reason,DateAndTime,RecommenderName} = item;
      const dateStr = DateAndTime;
      const dateObj = parseISO(dateStr);
      const date = formatDate(dateObj, 'MMMM do yyyy, h:mm:ss a')
    return (
        <div className="card w-full bg-base-100 shadow">
        <figure className="px-10 pt-10">
          <img
            src={Recommend_Product_Image}
            className="rounded-xl md:w-[305px] md:h-[228px]"
          />
        </figure>
        <div className="card-body  ">
        <div className='flex gap-4 flex-wrap'>
              <p className='font-medium'>Date : <span>{date.slice(0,13)}</span></p>
              <p className='font-medium'>Time : <span>{date.slice(15,30)}</span></p>
            </div>
          <h2 className="card-title font-bold">{Recommend_Product_Name}</h2>
          <h2 className="card-title">{Recommend_Product_Title}</h2>
           
          <p className="text-[#585656]">{Recommend_Product_Reason.slice(0, 100)}</p>
          <p className="text-lg font-medium font-robo">Recommender: {RecommenderName}</p>
           
             
        </div>
      </div>
    );
};

export default ReMeCart;