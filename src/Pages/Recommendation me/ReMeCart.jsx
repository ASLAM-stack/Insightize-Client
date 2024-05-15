import { formatDate, parseISO } from "date-fns";
 

 

const ReMeCart = ({item}) => {
    const{Recommend_Product_Image,Recommend_Product_Name,Recommend_Product_Title,Recommend_Product_Reason,DateAndTime,RecommenderName} = item;
      const dateStr = DateAndTime;
      const dateObj = parseISO(dateStr);
      const date = formatDate(dateObj, 'MMMM do yyyy, h:mm:ss a')
    return (
      <tr>
      <td>
        <div className="avatar">
          <div className="rounded w-24 h-24">
            <img src={Recommend_Product_Image} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>{Recommend_Product_Name}</td>
      <td>{date}</td>
      <td>{RecommenderName}</td>
    </tr>
    );
};

export default ReMeCart;