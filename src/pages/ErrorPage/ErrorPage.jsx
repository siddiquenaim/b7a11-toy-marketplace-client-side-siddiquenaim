import React from "react";
import { Link, useRouteError } from "react-router-dom";
import errorPic from "/error.gif";

const ErrorPage = () => {
  {
    document.title = "ERROR | Bricktopia";
  }
  const { error, status } = useRouteError();

  return (
    <section className="flex items-center h-screen p-16 bg-[#F9F9F6] text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <img
          src={errorPic}
          style={{ maxHeight: "400px", maxWidth: "400px" }}
          alt=""
        />
        <div className="max-w-md text-center">
          <h2 className="text-[#CF102D] mb-8 font-extrabold text-9xl">
            <span className="sr-only ">Error</span> {status || 404}
          </h2>
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            {error?.message}
          </p>
          <Link to="/">
            <button className="btn bg-[#CF102D] hover:bg-[#A70B22] border-none mr-5 text-white">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
