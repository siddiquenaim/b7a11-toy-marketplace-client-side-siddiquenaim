import React from "react";

const Blog = () => {
  {
    document.title = "Blogs - Bricktopia";
  }
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4 flex">
          <div>
            <div className="collapse">
              <input type="checkbox" />
              <div className="collapse-title bg-primary text-white py-2 px-4 rounded-md cursor-pointer">
                What is an access token and refresh token? How do they work and
                where should we store them on the client-side?
              </div>
              <div className="collapse-content px-4">
                <p>
                  An access token is a credential used to access protected
                  resources on a server. It is typically a JSON web token (JWT)
                  that contains information about the user and their
                  permissions. Access tokens are usually short-lived and are
                  used for authentication.
                </p>
                <p>
                  A refresh token is a token that is used to obtain a new access
                  token when the current one expires. It is a long-lived token
                  that is stored securely on the client-side.
                </p>
                <p>
                  Access tokens are usually stored in the client-side memory or
                  local storage, while refresh tokens should be securely stored,
                  such as in an HTTP-only cookie or a secure storage mechanism
                  provided by the platform (e.g., Keychain on iOS, KeyStore on
                  Android).
                </p>
              </div>
            </div>

            <div className="collapse">
              <input type="checkbox" />
              <div className="collapse-title bg-primary text-white py-2 px-4 rounded-md cursor-pointer">
                Compare SQL and NoSQL databases?
              </div>
              <div className="collapse-content px-4">
                <p>
                  SQL databases (e.g., MySQL, PostgreSQL) are relational
                  databases that use structured query language (SQL) to define
                  and manipulate the data. They have a predefined schema,
                  enforce data integrity through relationships, and are suitable
                  for complex data structures and transactions.
                </p>
                <p>
                  NoSQL databases (e.g., MongoDB, Cassandra) are non-relational
                  databases that store data in a flexible, schema-less format,
                  typically using JSON-like documents. They provide horizontal
                  scalability, high availability, and are suitable for handling
                  large amounts of unstructured or semi-structured data.
                </p>
              </div>
            </div>

            <div className="collapse">
              <input type="checkbox" />
              <div className="collapse-title bg-primary text-white py-2 px-4 rounded-md cursor-pointer">
                What is express js? What is Nest JS (google it)?
              </div>
              <div className="collapse-content px-4">
                <p>
                  Express.js is a minimal and flexible Node.js web application
                  framework that provides a set of features for building web
                  applications and APIs. It is widely used for its simplicity,
                  scalability, and extensive ecosystem of middleware and
                  plugins.
                </p>
                <p>
                  NestJS is a progressive Node.js framework for building
                  efficient, reliable, and scalable server-side applications. It
                  uses modern JavaScript and TypeScript features and follows a
                  modular architecture inspired by Angular. NestJS is known for
                  its powerful dependency injection system, built-in support for
                  TypeScript, and its ability to generate efficient and
                  maintainable code.
                </p>
              </div>
            </div>

            <div className="collapse">
              <input type="checkbox" />
              <div className="collapse-title bg-primary text-white py-2 px-4 rounded-md cursor-pointer">
                What is express js? What is Nest JS (google it)?
              </div>
              <div className="collapse-content px-4">
                <p>
                  Express.js is a minimal and flexible Node.js web application
                  framework that provides a set of features for building web
                  applications and APIs. It is widely used for its simplicity,
                  scalability, and extensive ecosystem of middleware and
                  plugins.
                </p>
                <p>
                  NestJS is a progressive Node.js framework for building
                  efficient, reliable, and scalable server-side applications. It
                  uses modern JavaScript and TypeScript features and follows a
                  modular architecture inspired by Angular. NestJS is known for
                  its powerful dependency injection system, built-in support for
                  TypeScript, and its ability to generate efficient and
                  maintainable code.
                </p>
              </div>
            </div>
          </div>

          <div>
            <img
              src="https://img.freepik.com/free-vector/organic-flat-people-asking-questions-illustration_23-2148906283.jpg?size=626&ext=jpg&ga=GA1.2.499061188.1673080121&semt=sph"
              alt="Blog Illustration"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
