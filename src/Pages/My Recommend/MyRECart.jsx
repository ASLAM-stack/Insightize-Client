import { formatDate, parseISO } from "date-fns";
import Swal from "sweetalert2";

 

const MyRECart = ({item , refetch}) => {
    const{Recommend_Product_Image,Recommend_Product_Name,Recommend_Product_Title,Recommend_Product_Reason,DateAndTime,userName,_id} = item;
      const dateStr = DateAndTime;
      const dateObj = parseISO(dateStr);
      const date = formatDate(dateObj, 'MMMM do yyyy, h:mm:ss a')

      const handleDelete = (id) => {
        Swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`http://localhost:5000/recommended/${_id}`, {
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
      <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline btn-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded w-24 h-24">
            <img src={Recommend_Product_Image} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>{Recommend_Product_Name}</td>
      <td>{date}</td>
      <td>{userName}</td>
    </tr>
    );
};

export default MyRECart;