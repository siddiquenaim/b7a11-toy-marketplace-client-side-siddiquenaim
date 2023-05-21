import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToys = () => {
  {
    document.title = "My Toys | Bricktopia";
  }

  const [toys, setToys] = useState([]);
  const { user } = useContext(AuthContext);
  const [isActive, setIsActive] = useState("");

  const url = `https://toy-marketplace-server-nine-sigma.vercel.app/mytoys?sellerEmail=${user?.email}`;

  const ascendingUrl = `https://toy-marketplace-server-nine-sigma.vercel.app/myToys?sellerEmail=${user?.email}&&sort=1`;

  const descendingUrl = `https://toy-marketplace-server-nine-sigma.vercel.app/myToys?sellerEmail=${user?.email}&&sort=desc`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [url]);

  const handleSortAscending = (value) => {
    fetch(ascendingUrl)
      .then((res) => res.json())
      .then((data) => setToys(data));
    setIsActive(value);
  };

  const handleSortDescending = (value) => {
    setIsActive(value);
    fetch(descendingUrl)
      .then((res) => res.json())
      .then((data) => setToys(data));
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to get this lego back!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://toy-marketplace-server-nine-sigma.vercel.app/mytoys/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your lego has been deleted.", "success");
              const remaining = toys.filter((toy) => toy._id !== id);
              setToys(remaining);
            }
          });
      }
    });
  };

  // console.log(toys);
  return (
    <div className="mb-20 mt-10">
      <h1 className="text-5xl text-center font-bold mb-10">My Toys</h1>
      <h2 className="text-center text-xl font-bold">Sort By Price</h2>
      <div className="flex justify-center items-center mt-5 mb-7">
        <div className="flex items-center border font-semibold">
          <div>
            <div
              onClick={() => handleSortAscending("asc")}
              className={`btn-sort py-3 px-5 cursor-pointer ${
                isActive == "asc" &&
                "bg-[#CF102D] hover:bg-[#A70B22] border-none normal-case text-white"
              }`}
            >
              Ascending order
            </div>
          </div>

          <div>
            <div
              onClick={() => handleSortDescending("desc")}
              className={`btn-sort py-3 px-5 cursor-pointer border-l-2 ${
                isActive == "desc" &&
                "bg-[#CF102D] hover:bg-[#A70B22] border-none normal-case text-white"
              }`}
            >
              Descending order
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-[90%] lg:w-[90%] mx-auto">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Toy Picture</th>
              <th>Toy Name</th>
              <th>Seller</th>
              <th>Seller Email</th>
              <th>Subcategory</th>
              <th>Rating</th>
              <th>Price</th>
              <th>Available Qty.</th>
              <th>Details</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy, i) => (
              <tr key={toy._id}>
                <th>{i + 1}</th>
                <th>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      {toy?.pictureUrl && <img src={toy.pictureUrl} />}
                    </div>
                  </div>
                </th>
                <td>{toy.name}</td>
                <td>{toy.sellerName}</td>
                <td>{toy.sellerEmail}</td>
                <td>{toy.subcategory}</td>
                <td>{toy.rating}</td>
                <td>{toy.price}</td>
                <td>{toy.availableQuantity}</td>
                <td>{toy.details}</td>
                <td>
                  <Link to={`/edit-details/${toy._id}`}>
                    <button className="btn bg-[#CF102D] hover:bg-[#A70B22] border-none normal-case text-white">
                      Edit Details
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(toy._id)}
                    className="btn btn-circle btn-outline border-[#CF102D] text-[#CF102D] hover:bg-[#CF102D] hover:text-white hover:border-none"
                  >
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
