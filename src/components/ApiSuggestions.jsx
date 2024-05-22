import React from "react";
import { Link } from "react-router-dom";
import useFetchData from "./FetchData";

function ApiSuggestions({ category }) {
  const { entries } = useFetchData();

  const filteredEntries = entries.filter(
    (entry) => entry.category === category
  );

  return (
    <>
      <h3 className="pl-2 text-base leading-5 font-bold tracking-tight text-slate-300 ">
        other APIs from the category {category}:
      </h3>
      <div className="flex my-5">
        {filteredEntries.map((entry) => (
          <div
            key={entry.id}
            className="flex w-80 p-6 mx-1 pb-2 bg-slate-700 border border-slate-700 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 "
          >
            <img className="h-12 pt-0" src={entry.url} alt={entry.title} />
            <h3 className="pl-2 text-base leading-5 font-bold tracking-tight text-slate-300 ">
              {entry.title}
            </h3>
            <Link to={`/API-details/${entry.id}`}>
              <div className="flex flex-row justify-end pb-2">
                <div className="flex flex-row">
                  <button
                    id="toggle-btn"
                    className="mt-4 text-sm text-blue-500 focus:outline-none"
                  >
                    Read More
                  </button>
                  <div className="pt-4 px-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#3b82f6"
                    >
                      <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default ApiSuggestions;
