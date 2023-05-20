import React from "react";
import { useLoaderData } from "react-router-dom";

const AllToys = () => {
  const allToys = useLoaderData();
  console.log(allToys);
  return (
    <div>
      <h1 className="text-5xl text-center font-bold my-10">All toys</h1>
      <div className="overflow-x-auto">
        <table className="table w-[95%] lg:w-[90%] mx-auto">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Subcategory</th>
              <th>Price</th>
              <th>Available Qty.</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allToys.map((toy, i) => (
              <tr key={toy._id}>
                <th>{i + 1}</th>
                <td>{toy.sellerName}</td>
                <td>{toy.name}</td>
                <td>{toy.subcategory}</td>
                <td>{toy.price}</td>
                <td>{toy.availableQuantity}</td>
                <td>
                  <button className="btn bg-[#CF102D] hover:bg-[#A70B22] border-none normal-case text-white">
                    View Details
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

export default AllToys;

// availableQuantity
// :
// 10
// details
// :
// "Experience the power of a Lamborghini with this LEGO Technic set. Build a detailed Lamborghini car with working features."
// name
// :
// "Technic Lamborghini"
// pictureUrl
// :
// "https://raw.githubusercontent.com/siddiquenaim/toy-image-host/main/lamborg.avif"
// price
// :
// 39.99
// rating
// :
// 4.7
// sellerEmail
// :
// "sales@brickspeed.com"
// sellerName
// :
// "BrickSpeed"
// subcategory
// :
// "lego-cars"
// _id
// :
// "6467974296b8e8625f233266"
