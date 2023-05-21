import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Swal from "sweetalert2";

const AboutUsSection = () => {
  const handleAboutUs = () => {
    Swal.fire({
      title: "More about us coming soon",
      showConfirmButton: true,
      timer: 1500,
    });
  };
  return (
    <section className=" mx-auto w-[95%] my-20">
      <h1 className="mb-10 text-center text-5xl font-bold">About Us</h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
              alt="About Us Image"
              className="w-full h-[400px] md:h-[500px] object-cover rounded-md"
            />
            <div className="absolute inset-0 bg-black opacity-20 rounded-md"></div>
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-4">Welcome to Bricktopia</h2>
            <p className="text-lg text-gray-800 mb-6">
              Welcome to Bricktopia, your ultimate LEGO destination! We're a
              passionate community of builders, creators, and dreamers.
            </p>
            <p className="text-lg text-gray-800 mb-6">
              Explore the endless possibilities of LEGO sets, connect with
              like-minded enthusiasts, and unleash your creativity. Join us on
              this brick-building journey and start unlocking your imagination
              today!
            </p>
            <p className="text-lg text-gray-800 mb-6">
              At Bricktopia, we believe that LEGO is not just a toy—it's a way
              of life. Our mission is to inspire and empower LEGO enthusiasts of
              all ages to embrace their love for building and storytelling. Join
              our vibrant community and embark on a world of endless LEGO
              adventures. Let your imagination run wild and create unforgettable
              memories with Bricktopia!
            </p>
            <button
              onClick={handleAboutUs}
              className="bg-[#CF102D] hover:bg-[#A70B22] text-white py-2 px-4 rounded-full inline-flex items-center font-bold"
            >
              Learn More <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
