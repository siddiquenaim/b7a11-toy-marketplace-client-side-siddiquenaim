import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="">
        <h1 className="text-5xl font-bold text-center mb-10">Please Login</h1>
        <div className="card flex-shrink-0 w-full max-w-sm lg:max-w-3xl shadow-2xl bg-base-100 lg:px-10">
          <form onSubmit={handleLogin} className="card-body">
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
              <button className="btn bg-[#CF102D] hover:bg-[#A70B22] border-none text-white">
                Login
              </button>
            </div>
          </form>
          <p className="text-center pb-4">
            New at Bricktopia?{" "}
            <Link to="/register" className="text-[#CF102D]">
              Register
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
