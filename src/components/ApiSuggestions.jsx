import React from "react";
import { Link } from "react-router-dom";
import useFetchData from "./FetchData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ApiSuggestions({ category }) {
  const { entries } = useFetchData();

  const filteredEntries = entries.filter(
    (entry) => entry.category === category
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    // centerPadding: "100px",
  };
  return (
    <>
      <h3 className="pl-2 text-base leading-5 font-bold tracking-tight text-slate-300 ">
        other APIs from the category {category}:
      </h3>
      <div className="my-5">
        <Slider {...settings}>
          {filteredEntries.map((entry) => (
            <Link to={`/API-details/${entry.id}`} key={entry.id}>
              <div className="flex flex-col w-60 p-3 mx-1 pb-2 bg-slate-700 border border-slate-700 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
                <div className="flex">
                  <img
                    className="h-10 pt-0"
                    src={entry.file.url}
                    alt={entry.title}
                  />
                  <div className="flex flex-col">
                    <h3 className="pl-2 text-base leading-5 font-bold tracking-tight text-slate-300 ">
                      {entry.title}
                    </h3>
                    <p className="pl-2 font-normal text-slate-300 dark:text-gray-400 ">
                      by {entry.developer}
                    </p>
                  </div>
                </div>

                <button
                  id="toggle-btn"
                  className="mt-4 text-sm text-blue-500 focus:outline-none"
                >
                  Read More
                </button>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default ApiSuggestions;
