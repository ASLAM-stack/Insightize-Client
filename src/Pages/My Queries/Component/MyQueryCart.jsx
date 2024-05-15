import { MdEditSquare } from "react-icons/md";
import { RiDeleteBin3Fill } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";
import { format, parseISO } from "date-fns";
import Swal from "sweetalert2";

const MyQueryCart = ({ item, refetch }) => {
  const {
    _id,
    boycott_Reason,
    currentDateAndTime,
    displayName,
    photoURL,
    product_Brand,
    product_Image,
    product_Name,
    query_Title,
    recommendationCount,
  } = item;

  const dateStr = currentDateAndTime;
  const dateObj = parseISO(dateStr);
  const date = format(dateObj, 'MMMM do yyyy, h:mm:ss a');

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/query/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Success!",
                text: "Deleted Tourist Spot successfully!",
                icon: "success",
                confirmButtonText: "Ok",
              });
              refetch();
            }
          });
      }
    });
  };

  return (
    <div className="card w-full bg-base-100 shadow">
      <figure className="px-10 pt-10">
        <img
          src={product_Image}
          className="rounded-xl md:w-[305px] md:h-[228px]"
        />
      </figure>
      <div className="card-body">
        <div className="flex gap-4 flex-wrap">
          <p className="font-medium">
            Date: <span>{date.slice(0, 13)}</span>
          </p>
          <p className="font-medium">
            Time: <span>{date.slice(15, 30)}</span>
          </p>
        </div>
        <h2 className="card-title font-bold">{product_Name}</h2>
        <h2 className="card-title">{product_Brand}</h2>
        <p className="font-medium">{query_Title}</p>
        <p className="text-[#585656]">{boycott_Reason.slice(0, 100)}</p>

        <div>
          <p className="text-[#521414] font-semibold">
            Recommendation: <span>{recommendationCount}</span>
          </p>
        </div>

        <div className="card-actions justify-end">
          <Link to={`/update/${_id}`}>
            <button className="btn btn-primary btn-md">
              <MdEditSquare className="text-xl"></MdEditSquare>
            </button>
          </Link>
          <Link to={`/queryDetails/${_id}`}>
            <button className="btn btn-primary btn-md">
              <TbListDetails className="text-xl" />
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-primary btn-md"
          >
            <RiDeleteBin3Fill className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyQueryCart;
