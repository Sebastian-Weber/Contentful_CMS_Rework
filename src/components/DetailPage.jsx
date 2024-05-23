import React from "react";
import { useState, useEffect } from "react";
import useFetchData from "./FetchData";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CodeMirror from "@uiw/react-codemirror";
import { langs } from "@uiw/codemirror-extensions-langs";
import { darcula } from "@uiw/codemirror-theme-darcula";
import useEmoji from "./useEmoji";
import ApiSuggestions from "./ApiSuggestions";

function DetailPage() {
  const { id } = useParams();
  const { entries } = useFetchData();
  const apiDetails = {};
  {
    entries.map((entry) => {
      if (entry.id === Number(id)) {
        apiDetails.title = entry.title;
        apiDetails.description = entry.description;
        apiDetails.url = entry.file.url;
        apiDetails.category = entry.category;
        apiDetails.popularity = entry.popularity;
        apiDetails.usage = entry.usage;
        apiDetails.author = entry.developer;
      }
    });
  }

  const { getEmoji, getTextColor } = useEmoji(apiDetails.popularity);
  return (
    <>
      <div className="flex mx-auto justify-center m-5">
        
        <div className="block w-4/5 bg-slate-700 border border-slate-700 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

          {/* Window bar */}
          <div className="flex flex-row justify-end p-3 mb-2 font-semibold rounded-t-lg border-b-2 border-slate-600 text-slate-400 bg-slate-800">
          
           {/* Close button */}
          <div className="px-2">
          <Link to={"/"}>
            <button
              id="close-menu"
              onClick={() => setShow(!show)}
              type="button"
              data-drawer-hide="drawer-navigation"
              aria-controls="drawer-navigation"
              class=" text-gray-400 bg-transparent hover:bg-slate-500 hover:text-gray-900 rounded-lg text-sm w-8 h-8 top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
            <path
              stroke="currentColor"
              stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            </button>
            </Link>

          </div>
          
          </div>


          {/* Window body */}
          <div>
          <div className="flex items-end p-8 pt-0 ">
            <img
              className="h-12 pt-0"
              src={apiDetails.url}
              alt={apiDetails.title}
            />
            <div className="grow">
              <h6 className="pl-2 text-base leading-5 font-bold tracking-tight text-slate-300">
                {apiDetails.title}
              </h6>
              <p className="pl-2 font-normal text-slate-300 dark:text-gray-400 ">
                by {apiDetails.author}
              </p>
            </div>
            <div className="grow pl-40">
              <p className="font-normal text-slate-300 dark:text-gray-400">
                category: {apiDetails.category}
              </p>
              <p className="font-normal text-slate-300 dark:text-gray-400">
                rating: {apiDetails.popularity}
                <img src={getEmoji()} alt="" />
              </p>
            </div>
          </div>
          <hr className="w-10rem h-0.5 mx-auto md:my-3 bg-gray-100 border-0 rounded dark:bg-gray-700" />
          <div className="flex p-10">
            <div className="flex w-3/5">
              <p className="w-3/4 p-5 font-normal text-slate-300 dark:text-gray-400 text-lg">
                {apiDetails.description}
              </p>
            </div>

            <div className="grow">
              <p className="pb-2 font-normal text-slate-300 dark:text-gray-400">
                usage with axios:
              </p>
              {apiDetails.usage ? (
                <CodeMirror
                  value={apiDetails.usage}
                  extensions={[langs.jsx()]}
                  theme={darcula}
                  maxWidth="40rem"
                  minWidth="40rem"
                />
              ) : (
                <p className="w-3/4 p-5 font-normal text-slate-300 dark:text-gray-400 text-lg">
                  not available
                </p>
              )}
            </div>
          </div>
          <hr className="w-10rem h-0.5 mx-auto md:my-3 bg-gray-100 border-0 rounded dark:bg-gray-700" />
          <div>
            <ApiSuggestions category={apiDetails.category} />
          </div>
          <div className="flex justify-end">
            {/* <Link to={"/"}>
              <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                back
              </button>
            </Link> */}
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default DetailPage;
