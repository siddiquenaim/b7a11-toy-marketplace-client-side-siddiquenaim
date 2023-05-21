import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const EditDetails = () => {
  const toyInfo = useLoaderData();
  const {
    _id,
    name,
    rating,
    sellerEmail,
    sellerName,
    subcategory,
    pictureUrl,
  } = toyInfo;

  {
    document.title = `Update ${name} | Bricktopia`;
  }

  const handleUpdateToy = (event, id) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const details = form.details.value;
    const availableQuantity = form.availableQuantity.value;

    const updatedToy = {
      _id,
      name,
      pictureUrl,
      availableQuantity: availableQuantity,
      price: price,
      details: details,
      rating,
      sellerEmail,
      sellerName,
      subcategory,
    };

    fetch(
      `https://toy-marketplace-server-nine-sigma.vercel.app/updateToy/${id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedToy),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Your lego has been updated!",
            showConfirmButton: true,
            timer: 1500,
          });
          form.reset();
        }
      });
  };

  //   console.log(toyInfo);
  return (
    <div className="mb-20 mt-10">
      <h1 className="text-3xl text-center font-bold mb-10">
        Update Information of <br />
        {name}
      </h1>

      <div className="flex justify-center items-center">
        <form
          onSubmit={(event) => handleUpdateToy(event, _id)}
          className="w-[90%] mx-auto grid"
        >
          <div className="form-control w-[90%]">
            <label className="label">
              <span className="label-text font-bold">Price</span>
            </label>
            <input
              name="price"
              type="number"
              placeholder="Price"
              className="input input-bordered w-[90%]"
              required
            />
          </div>

          <div className="form-control w-[90%]">
            <label className="label">
              <span className="label-text font-bold">Available Quantity</span>
            </label>
            <input
              name="availableQuantity"
              type="number"
              min="0"
              max="500"
              placeholder="Available Quantity"
              className="input input-bordered w-[90%]"
              required
            />
          </div>
          <div className="form-control w-[100%] col-span-2">
            <label className="label">
              <span className="label-text font-bold">Detail Description</span>
            </label>
            <input
              name="details"
              type="text"
              placeholder="Detail Description"
              className="input input-bordered input-lg w-[90%]"
              required
            />
          </div>
          <div className="form-control mx-auto col-span-2">
            <input
              className="cursor-pointer btn-wide btn bg-[#CF102D] hover:bg-[#A70B22] border-none normal-case text-white mt-8"
              type="submit"
              value="Update"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditDetails;
