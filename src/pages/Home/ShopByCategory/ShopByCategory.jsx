import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [showMore, setShowMore] = useState(false);
  const [hideButton, setHideButton] = useState(false);

  useEffect(() => {
    fetch(
      `https://toy-marketplace-server-nine-sigma.vercel.app/allData/${activeTab}`
    )
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setHideButton(true);
  };

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className=" mx-auto w-[95%] my-20">
      <h1 className="mb-10 text-center text-5xl font-bold">Shop By Category</h1>
      <div className="text-center w-[100%] mx-auto mb-12 font-bold text-xl">
        <p className="mb-4">Choose which lego you wanna buy</p>
        <div className="lg:flex justify-center items-center space-y-4  lg:space-y-0 lg:space-x-9">
          <div
            onClick={() => handleTabClick("lego-city")}
            className={`cursor-pointer px-5 py-3 rounded-lg  ${
              activeTab == "lego-city" ? "bg-red-600 text-white" : "bg-gray-300"
            }`}
          >
            Lego City
          </div>
          <div
            onClick={() => handleTabClick("lego-cars")}
            className={`cursor-pointer px-5 py-3 rounded-lg  ${
              activeTab == "lego-cars"
                ? " bg-red-600 text-white"
                : "bg-gray-300"
            }`}
          >
            Lego Cars
          </div>
          <div
            onClick={() => handleTabClick("lego-architecture")}
            className={`cursor-pointer px-5 py-3 rounded-lg ${
              activeTab == "lego-architecture"
                ? " bg-red-600 text-white"
                : "bg-gray-300"
            }`}
          >
            Architecture
          </div>
        </div>
      </div>

      {/* show data */}
      <div className="grid lg:grid-cols-3  gap-5">
        {toys.slice(0, !showMore ? 15 : toys.length).map((toy) => (
          <div
            key={toy._id}
            className="card w-full bg-base-100 shadow-xl border"
          >
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

      {!hideButton && (
        <div className="flex justify-center items-center mt-10">
          {!showMore ? (
            <button
              onClick={handleShowMore}
              className="btn bg-[#CF102D] hover:bg-[#A70B22] border-none text-white"
            >
              Show More
            </button>
          ) : (
            <button
              onClick={handleShowMore}
              className="btn bg-[#CF102D] hover:bg-[#A70B22] border-none text-white"
            >
              Show Less
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ShopByCategory;
