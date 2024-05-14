import './Home.css'
import {  formatDate, parseISO  } from "date-fns";
const RecentCard = ({ item }) => {
  console.log(item);
  const {
    boycott_Reason,
    currentDateAndTime,
    displayName,
    photoURL,
    product_Brand,
    product_Image,
    product_Name,
    query_Title,
  } = item;
  const dateStr = currentDateAndTime;
  const dateObj = parseISO(dateStr);
  const date = formatDate(dateObj, 'MMMM do yyyy, h:mm:ss a')
  console.log(date);
  return (
    <div className="card w-full bg-base-100 shadow">
      <figure className="px-10 pt-10">
        <img
          src={product_Image}
          className="rounded-xl md:w-[305px] md:h-[228px]"
        />
      </figure>
      <div className="card-body items-center ">
        <h2 className="card-title font-bold">{product_Name}</h2>
        <h2 className="card-title">{product_Brand}</h2>
        <p className="font-medium">{query_Title}</p>
        <p className="text-[#585656]">{boycott_Reason.slice(0, 100)}</p>
        <div className="card-actions flex-start items-center gap-4">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={photoURL} />
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold font-work">{displayName}</h4>
          </div>
          <div className='flex gap-4 flex-wrap'>
            <p className='font-medium'>Date : <span>{date.slice(0,13)}</span></p>
            <p className='font-medium'>Time : <span>{date.slice(15,30)}</span></p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default RecentCard;
