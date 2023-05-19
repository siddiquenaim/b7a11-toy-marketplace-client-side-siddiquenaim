import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200 ">
      <div className="">
        <h1 className="text-5xl font-bold text-center mb-10">
          Please Register
        </h1>
        <div className="card flex-shrink-0 w-full max-w-sm lg:max-w-3xl shadow-2xl bg-base-100 lg:px-10">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                name="image"
                type="text"
                placeholder="Image URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#CF102D] hover:bg-[#A70B22] border-none  text-white">
                Register
              </button>
            </div>
          </form>
          <p className="text-center pb-4">
            Already have an account?{" "}
            <Link to="/login" className="text-[#CF102D]">
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
