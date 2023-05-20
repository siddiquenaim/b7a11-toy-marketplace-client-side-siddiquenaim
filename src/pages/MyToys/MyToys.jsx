import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const MyToys = () => {
  const [toys, setToys] = useState([]);
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/mytoys?sellerEmail=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [url]);

  console.log(toys);
  return (
    <div className="mb-20 mt-10">
      <h1 className="text-5xl text-center font-bold mb-10">My Toys</h1>
      <div className="overflow-x-auto">
        <table className="table w-[90%] lg:w-[90%] mx-auto">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Subcategory</th>
              <th>Price</th>
              <th>Available Qty.</th>
              <th>Details</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {toys.map((toy, i) => (
              <tr key={toy._id}>
                <th>{i + 1}</th>
                <td>{toy.sellerName}</td>
                <td>{toy.name}</td>
                <td>{toy.subcategory}</td>
                <td>{toy.price}</td>
                <td>{toy.availableQuantity}</td>
                <td>{toy.details}</td>
                <td>
                  <Link to="/edit-details">
                    <button className="btn bg-[#128CA6] hover:bg-[#4693a4] border-none normal-case text-white">
                      Edit Details
                    </button>
                  </Link>
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
