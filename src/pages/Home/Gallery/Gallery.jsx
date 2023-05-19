import React, { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Gallery = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/gallery")
      .then((res) => res.json())
      .then((data) => setImageUrls(data));
  }, []);
  return (
    <div className="my-20">
      <div className="mb-5">
        <h1 className="mb-10 text-center text-5xl font-bold">Our Gallery</h1>
      </div>
      <div className="p-3">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {imageUrls.map((img, i) => (
              <img
                className="shadow-2xl"
                key={i}
                src={img.imageURL}
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
