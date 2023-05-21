import React from "react";
import { FaArrowRight, FaBeer } from "react-icons/fa";

const ArticleSection = () => {
  const articles = [
    {
      id: 1,
      image: "article1.jpg",
      title: "Article 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      image: "article2.jpg",
      title: "Article 2",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      image: "article3.jpg",
      title: "Article 3",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      image: "article4.jpg",
      title: "Article 4",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className=" mx-auto w-[95%] my-20">
      <h1 className="mb-10 text-center text-5xl font-bold">
        Read All About It
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {articles.map((article) => (
          <div key={article.id} className="p-4 bg-white border">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{article.title}</h2>
            <p className="text-gray-700 mb-4">{article.content}</p>
            <button className="border-none font-bold ">
              Read Full Article <FaArrowRight className="inline-block" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleSection;
