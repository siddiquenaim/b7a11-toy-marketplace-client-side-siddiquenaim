import React from "react";
import { FaArrowRight, FaBeer } from "react-icons/fa";
import Swal from "sweetalert2";

const ArticleSection = () => {
  const handleComingSoon = (article) => {
    Swal.fire({
      title: `${article.title} coming soon`,
      showConfirmButton: true,
      timer: 1500,
    });
  };
  const articles = [
    {
      id: 1,
      image: "lego1.avif",
      title: "The Fun and Creativity of LEGO Building",
      content:
        "LEGO building is a popular hobby that allows individuals of all ages to unleash their creativity. With LEGO bricks, you can build intricate structures, vehicles, and even entire cities. The possibilities are endless!",
    },
    {
      id: 2,
      image: "lego2.avif",
      title: "Exploring the World of LEGO City Sets",
      content:
        "LEGO City sets bring the excitement of urban life to your fingertips. From police stations to fire trucks, explore a wide range of LEGO City sets that allow you to create your own bustling metropolis.",
    },
    {
      id: 3,
      image: "lego3.avif",
      title: "Building Realistic LEGO Cars and Super cars",
      content:
        "LEGO cars are not just toys; they are engineering marvels. Learn the techniques behind building realistic LEGO cars, from the sleek designs of sports cars to the ruggedness of off-road vehicles.",
    },
    {
      id: 4,
      image: "lego4.avif",
      title: "Discovering Architectural Wonders with LEGO",
      content:
        "Architectural LEGO sets bring famous landmarks to life in brick form. Dive into the world of LEGO architecture and recreate iconic structures such as the Eiffel Tower, Taj Mahal, or Sydney Opera House.",
    },
  ];

  return (
    <div className=" mx-auto w-[95%] my-20">
      <h1 className="mb-10 text-center text-5xl font-bold">
        Read All About It
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {articles.map((article) => (
          <div
            key={article.id}
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
            className="p-4 bg-white border"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{article.title}</h2>
            <p className="text-gray-700 mb-4">
              {article.content.slice(0, 100)}...
            </p>
            <button
              onClick={() => handleComingSoon(article)}
              className="border-none font-bold"
            >
              Read Full Article <FaArrowRight className="inline-block" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleSection;
