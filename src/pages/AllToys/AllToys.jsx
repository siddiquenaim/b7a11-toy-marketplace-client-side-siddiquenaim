import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllToys = () => {
  {
    document.title = "All Toys | Bricktopia";
  }

  const [allToys, setAllToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  const toys = useLoaderData();
  useEffect(() => {
    setAllToys(toys);
  }, [toys]);

  const handleSearchText = () => {
    fetch(
      `https://toy-marketplace-server-nine-sigma.vercel.app/toySearch?text=${searchText}`
    )
      .then((res) => res.json())
      .then((data) => setAllToys(data));
    if (searchText == "") {
      setAllToys(toys);
    }
  };
  // const handleSearchText = async () => {
  //   try {
  //     const response = await fetch(
  //       `https://toy-marketplace-server-nine-sigma.vercel.app/toySearch?text=${searchText}`
  //     );
  //     if (response.ok) {
  //       const data = await response.json();
  //       // Process the returned data or update your UI
  //       console.log(data);
  //     } else {
  //       // Handle the error
  //       console.error("Error:", response.status);
  //     }
  //   } catch (error) {
  //     // Handle network or other errors
  //     console.error("Error:", error);
  //   }
  // };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearchText();
    }
  };

  return (
    <div className="mb-20 mt-10">
      <h1 className="text-5xl text-center font-bold">All Toys</h1>
      <div className="flex items-center justify-center my-5 w-[90%] mx-auto">
        {" "}
        <span>
          <button
            onClick={handleSearchText}
            className="btn bg-[#CF102D] hover:bg-[#A70B22] border-none normal-case text-white mr-2"
          >
            Search
          </button>
        </span>
        <input
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleKeyDown}
          type="text"
          placeholder="Search Lego"
          className="input input-bordered input-error w-full max-w-xs"
        />
      </div>
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
                  <Link to={`/toy-details/${toy?._id}`}>
                    <button className="btn bg-[#CF102D] hover:bg-[#A70B22] border-none normal-case text-white">
                      View Details
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
