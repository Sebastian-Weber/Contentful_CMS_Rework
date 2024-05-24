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
      <h3 className="pl-10 py-3 text-xl leading-5 font-semibold tracking-tight text-slate-200 ">
        Other APIs from the category '{category}'
      </h3>
      <div className="my-2 px-20">
        <Slider {...settings} className="px-5 -mx-16">
          {filteredEntries.map((entry) => (
            <Link to={`/API-details/${entry.id}`} key={entry.id}>
              <div className="flex flex-col pt-6 pl-4 mx-1 min-h-36 py-2 bg-slate-800 border border-slate-700 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
                <div className="">
                  <img
                    className="h-10"
                    src={entry.file.url}
                    alt={entry.title}
                  />
                  <div className="flex flex-col pt-3">
                    <h3 className="text-base leading-5 font-bold tracking-tight text-slate-300 ">
                      {entry.title}
                    </h3>
                    <p className="font-normal text-slate-300 dark:text-gray-400 ">
                      by {entry.developer}
                    </p>
                  </div>
                </div>

                {/* <button
                  id="toggle-btn"
                  className="mt-4 text-sm text-blue-500 focus:outline-none"
                >
                  Read More
                </button> */}
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default ApiSuggestions;
