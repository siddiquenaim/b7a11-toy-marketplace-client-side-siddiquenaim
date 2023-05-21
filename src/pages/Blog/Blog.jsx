import React from "react";

const Blog = () => {
  {
    document.title = "Blogs | Bricktopia";
  }
  return (
    <div className="mb-20 mt-10">
      <h1 className="text-5xl text-center font-bold">
        Frequently Asked Questions
      </h1>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center">
        <div className="lg:w-[50%] mx-auto">
          <div className="space-y-5">
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-[90%] mx-auto"
            >
              <div className="collapse-title text-xl font-semibold">
                What is an access token and refresh token? How do they work and
                where should we store them on the client-side?
              </div>
              <div className="collapse-content font-medium">
                <ul>
                  <li>
                    An access token is a credential used to access protected
                    resources on a server. It contains information about the
                    user and their permissions and is used for authentication.
                  </li>{" "}
                  <br />
                  <li>
                    A refresh token is a token used to obtain a new access token
                    when the current one expires.
                  </li>{" "}
                  <br />
                  <li>
                    Access tokens are typically stored in client-side memory or
                    local storage, while refresh tokens should be securely
                    stored, such as in an HTTP-only cookie or a secure storage
                    mechanism provided by the platform.
                  </li>{" "}
                  <br />
                </ul>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-[90%] mx-auto"
            >
              <div className="collapse-title text-xl font-semibold">
                Compare SQL and NoSQL databases.
              </div>
              <div className="collapse-content font-medium">
                <ul>
                  <li>
                    SQL databases (e.g., MySQL, PostgreSQL) are relational
                    databases that use structured query language (SQL) to define
                    and manipulate data. They have a predefined schema and are
                    suitable for complex data structures and transactions.
                  </li>{" "}
                  <br />
                  <li>
                    NoSQL databases (e.g., MongoDB, Cassandra) are
                    non-relational databases that store data in a flexible,
                    schema-less format, typically using JSON-like documents.
                    They provide horizontal scalability and are suitable for
                    handling large amounts of unstructured or semi-structured
                    data.
                  </li>
                </ul>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-[90%] mx-auto"
            >
              <div className="collapse-title text-xl font-semibold">
                What is express js? What is Nest JS?
              </div>
              <div className="collapse-content font-medium">
                <ul>
                  <li>
                    Express.js is a minimal and flexible web application
                    framework for Node.js. It provides a set of features for
                    building web applications and APIs, making it popular for
                    its simplicity, scalability, and extensive middleware and
                    plugin ecosystem.
                  </li>{" "}
                  <br />
                  <li>
                    NestJS is a progressive Node.js framework for building
                    server-side applications. It uses modern JavaScript and
                    TypeScript features and follows a modular architecture
                    inspired by Angular. NestJS is known for its powerful
                    dependency injection system, built-in TypeScript support,
                    and ability to generate efficient and maintainable code.
                  </li>
                </ul>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-[90%] mx-auto"
            >
              <div className="collapse-title text-xl font-semibold">
                What is MongoDB aggregate and how does it work?
              </div>
              <div className="collapse-content font-medium">
                <ul>
                  <li>
                    MongoDB aggregate is a framework within MongoDB that allows
                    advanced data processing and aggregation operations.
                  </li>{" "}
                  <br />
                  <li>
                    It works by creating a pipeline of stages, where each stage
                    performs a specific operation on the data, such as
                    filtering, grouping, sorting, and combining data from
                    multiple collections.
                  </li>{" "}
                  <br />
                  <li>
                    The aggregate framework provides a flexible and powerful way
                    to analyze and manipulate data in MongoDB.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[50%] mx-auto">
          <img
            className="lg:w-[90%] mx-auto"
            src="https://img.freepik.com/free-vector/questions-concept-illustration_114360-1513.jpg?w=740&t=st=1684652380~exp=1684652980~hmac=5fe0b6893a8df21da31056c0040995df39433d88ea72eb66742e07f6424e067f"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
