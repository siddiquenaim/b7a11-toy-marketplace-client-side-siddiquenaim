import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleToy = () => {
  const toyDetails = useLoaderData();
  console.log(toyDetails);
  return (
    <div>
      <h1>single toy details here browski: {toyDetails.name}</h1>
    </div>
  );
};

export default SingleToy;
