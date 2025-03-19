import React from "react";
import list from "../../public/list.json";
import Cards from "../components/Cards.jsx";
import { Link } from "react-router-dom";

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center ">
          <h1 className="text-2xl  md:text-4xl">
            We are delighted to have you{" "}
            <span className="text-green-500">Here!</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ab
            mollitia animi tempora perspiciatis nihil nam nostrum neque, fugit
            dignissimos dicta repellat est vitae autem molestiae possimus rem
            obcaecati magnam?
          </p>
          <Link to="/">
            <button className=" mt-6 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
