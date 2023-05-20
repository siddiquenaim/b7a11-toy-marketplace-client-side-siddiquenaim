import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from || "/";
  console.log(location?.state?.from);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        console.log(result);
        setError("");
        navigate(from);
        form.reset();
      })
      .catch((error) => setError(error.message));
  };
  const handleGoogleLogin = () => {
    googleSignIn().then((result) => {
      console.log(result);
      setError("");
      navigate(from);
    });
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
          {error ? (
            <p className="py-4 text-red-600 font-semibold text-center">
              {error}{" "}
            </p>
          ) : (
            ""
          )}
          <div className="divider">OR</div>
          <button
            onClick={handleGoogleLogin}
            className="btn btn-block bg-blue-500 border-none hover:bg-blue-800"
          >
            Login with Google
          </button>
          <p className="text-center pb-4 mt-4">
            New at Bricktopia?{" "}
            <Link to="/register" className="text-[#CF102D] font-bold">
              Register
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
