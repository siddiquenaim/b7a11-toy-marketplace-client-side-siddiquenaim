import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const imageUrls = [
  "https://images.unsplash.com/photo-1651343726950-af1756778738?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGtpZCUyMGxlZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1651551514922-17863f746dbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
  "https://images.unsplash.com/photo-1590922739636-036fb9dfbbeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fGtpZCUyMGxlZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1651343726950-af1756778738?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGtpZCUyMGxlZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1631106256072-54c89defe828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxraWQlMjBsZWdvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1590922739636-036fb9dfbbeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fGtpZCUyMGxlZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1651551514922-17863f746dbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
  "https://images.unsplash.com/photo-1651343726950-af1756778738?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGtpZCUyMGxlZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1651343726950-af1756778738?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGtpZCUyMGxlZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1590922739636-036fb9dfbbeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fGtpZCUyMGxlZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
];

const Gallery = () => {
  return (
    <div className="my-20">
      <div className="mb-5">
        <h1 className="text-3xl text-center mb-3 font-bold">Gallery Section</h1>
      </div>
      <div className="p-3">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {imageUrls.map((img, i) => (
              <img
                key={i}
                src={img}
                style={{ display: "block", cursor: "pointer", width: "100%" }}
                alt=""
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default Gallery;

// https://www.youtube.com/watch?v=RDxnu8Xt5Rk
