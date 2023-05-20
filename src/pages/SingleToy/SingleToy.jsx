import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleToy = () => {
  const toyDetails = useLoaderData();
  const {
    availableQuantity,
    details,
    name,
    pictureUrl,
    price,
    rating,
    sellerEmail,
    sellerName,
    subcategory,
    _id,
  } = toyDetails;

  return (
    <div className="py-20">
      <h1 className="text-5xl text-center font-bold">{name}</h1>

      <div className="lg:flex w-100 justify-evenly mt-10">
        <img
          className="rounded-lg lg:w-[50%] mx-auto max-h-[500px] max-w-[250px] lg:max-w-[400px]"
          src={pictureUrl}
          alt=""
        />
        <div className="lg:w-[50%] mx-auto text-left flex items-center">
          <div className="w-[90%] lg:w-[75%] text-xl font-semibold mx-auto">
            <p>
              Rating: <span className="font-normal">{rating}</span>
            </p>
            <p>
              Available Quantity:{" "}
              <span className="font-normal">{availableQuantity} </span>
            </p>
            <p>
              Price: <span className="font-normal">{price}$</span>
            </p>
            <p className="mb-3">
              Details: <span className="font-normal">{details}</span>
            </p>
            <p>
              Seller Name: <span className="font-normal">{sellerName}</span>
            </p>
            <p>
              Seller Email: <span className="font-normal">{sellerEmail}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-15 flex justify-center items-center">
        <button className="btn bg-[#CF102D] hover:bg-[#A70B22] border-none mr-5 text-white mt-5">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleToy;
