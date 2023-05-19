import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allData")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <div className=" mx-auto w-[95%] mt-20">
      <h1 className="mb-10 text-center text-5xl">Shop By Category</h1>
      <div className="grid lg:grid-cols-3  gap-5">
        {toys.map((toy) => (
          <div className="card w-full bg-base-100 shadow-xl border">
            <figure className="px-10 pt-10">
              <img
                className="rounded-xl"
                style={{ height: "280px", width: "271px" }}
                src={toy?.pictureUrl}
              ></img>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title mt-3 my-2 text-xl font-extrabold underline">
                {toy?.name}
              </h2>
              <div className="w-full text-lg flex justify-between mb-3">
                <p className="font-semibold">
                  <span className="font-bold">Price:</span> {toy?.price}$
                </p>
                <p className="font-semibold">
                  <span className="font-bold">Rating:</span> {toy?.rating}
                </p>
              </div>
              <Link to={`/toy-details/${toy?._id}`}>
                <button className="btn bg-[#CF102D] hover:bg-[#A70B22] border-none mr-5 text-white">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
