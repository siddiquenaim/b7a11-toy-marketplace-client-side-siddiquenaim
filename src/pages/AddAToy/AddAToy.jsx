import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import Select from "react-select";

const AddAToy = () => {
  {
    document.title = "Add a Toy - Bricktopia";
  }
  const { user } = useContext(AuthContext);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: "lego-city", label: "Lego City" },
    { value: "lego-cars", label: "Lego Cars" },
    { value: "lego-architecture", label: "Lego Architecture" },
  ];

  const handleAddAToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const subcategory = selectedOption.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const details = form.details.value;
    const availableQuantity = form.availableQuantity.value;

    const toyInfo = {
      name,
      pictureUrl: image,
      subcategory,
      sellerName,
      sellerEmail,
      rating,
      price,
      availableQuantity,
      details,
    };
    // console.log(toyInfo);

    fetch("https://toy-marketplace-server-nine-sigma.vercel.app/allData", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyInfo),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="mb-20 mt-10">
      <h1 className="text-5xl text-center font-bold">Add a Toy</h1>
      <div className="my-5">
        <form onSubmit={handleAddAToy} className="w-[90%] mx-auto grid">
          <div className="form-control w-[90%]">
            <label className="label">
              <span className="label-text font-bold">Toy Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Toy Name"
              className="input input-bordered w-[90%]"
            />
          </div>
          <div className="form-control w-[90%]">
            <label className="label">
              <span className="label-text font-bold">Image URL</span>
            </label>
            <input
              name="image"
              type="text"
              placeholder="Image URL"
              className="input input-bordered w-[90%]"
            />
          </div>
          <div className="form-control w-[90%]">
            <label className="label">
              <span className="label-text font-bold">Seller Name</span>
            </label>
            <input
              name="sellerName"
              type="text"
              placeholder="Seller Name"
              value={user?.displayName}
              className="input input-bordered w-[90%]"
              readOnly
            />
          </div>
          <div className="form-control w-[90%]">
            <label className="label">
              <span className="label-text font-bold">Seller Email</span>
            </label>
            <input
              name="sellerEmail"
              type="email"
              placeholder="Seller Email"
              className="input input-bordered w-[90%]"
              value={user?.email}
              readOnly
            />
          </div>
          <div className="form-control w-[90%]">
            <label className="label">
              <span className="label-text font-bold">Subcategory</span>
            </label>
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              className=" w-[90%]"
            />
          </div>
          <div className="form-control w-[90%]">
            <label className="label">
              <span className="label-text font-bold">Price</span>
            </label>
            <input
              name="price"
              type="number"
              placeholder="Price"
              className="input input-bordered w-[90%]"
            />
          </div>
          <div className="form-control w-[90%]">
            <label className="label">
              <span className="label-text font-bold">Rating</span>
            </label>
            <input
              name="rating"
              type="number"
              min="0"
              max="5"
              placeholder="Rating"
              className="input input-bordered w-[90%]"
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
            />
          </div>
          <div className="form-control mx-auto col-span-2">
            <input
              className="cursor-pointer btn-wide btn bg-[#CF102D] hover:bg-[#A70B22] border-none normal-case text-white mt-8"
              type="submit"
              value="Add a toy"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAToy;
