import { useEffect, useState, useCallback } from "react";
import useFetchData from "./FetchData";
import ReactPaginate from "react-paginate";
import ApiCard from "./ApiCard";
import BeatLoader from "react-spinners/BeatLoader";
import NavbarTop from "./NavbarTop";
import OffCanvas from "./OffCanvas";

function Items({ currentItems, filter, highlight }) {
  return (
    <>
      {currentItems &&
        currentItems.map((entry) => {
          if (filter.length === 0 || filter.includes(entry.category)) {
            return (
              <ApiCard
                key={entry.id}
                id={entry.id}
                title={entry.title}
                url={entry.file.url}
                alt={entry.title}
                description={entry.description}
                popularity={entry.popularity}
                category={entry.category}
                highlight={highlight}
              />
            );
          }
          return null;
        })}
    </>
  );
}

function Contentful({ itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);
  const [filter, setFilter] = useState([]);
  const { entries, isLoading } = useFetchData();
  const [searchResults, setSearchResults] = useState([]);
  const [filteredEntries, setFilteredEntries] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [highlight, setHighlight] = useState("");

  useEffect(() => {
    const getFilteredEntries = () => {
      if (filter.length > 0) {
        console.log("filter ist: " + filter);
        return entries.filter((entry) => filter.includes(entry.category));
      } else {
        return entries;
      }
    };
    setFilteredEntries([...getFilteredEntries()]);
  }, [filter]);

  useEffect(() => {
    console.log(entries);
    setFilteredEntries([...entries]);
  }, [entries]);

  useEffect(() => {
    console.log(currentItems);
  }, [currentItems]);

  useEffect(() => {
    console.log(searchResults);
    if (searchResults.length > 0) {
      setFilteredEntries([...searchResults]);
    } else {
      setFilteredEntries([...entries]);
    }
  }, [searchResults]);

  useEffect(() => {
    function getCurrentItems() {
      console.log("get current items");
      console.log(filteredEntries);
      return filteredEntries.slice(itemOffset, itemOffset + itemsPerPage);
    }
    setCurrentItems([...getCurrentItems()]);
  }, [filteredEntries, itemOffset]);

  const handleFilterChange = useCallback((newFilter) => {
    setFilter([...newFilter]);
    setItemOffset(0); // Reset offset when filter changes
  }, []);

  function handleChange(e) {
    e.preventDefault();
    console.log(e.target.value);
    console.log(entries);
    getSearchResults(e.target.value);
    setHighlight(e.target.value);
  }

  function getSearchResults(value) {
    // Input should at least have 3 characters

    const results = entries.filter(
      (entry) =>
        entry.title.toLowerCase().includes(value.toLowerCase()) ||
        entry.description.toLowerCase().includes(value.toLowerCase())
    );
    setFilter([]); // Reset filter when searching
    setItemOffset(0); // Reset offset when searching
    console.log(results);
    setSearchResults([...results]); // Update filteredEntries with search results
  }

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredEntries.length;
    setItemOffset(newOffset);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center bg-slate-600">
        <div className="flex flex-wrap gap-2 h-screen items-center justify-center">
          <p className="text-slate-300">
            Loading...
            <BeatLoader color="HotPink" thickness={50} size={10} />
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* <NavbarTop onChangeFilter={handleFilterChange} categories={filter} /> */}
      <div className="flex bg-slate-800 mb-10 border-gray-500 border-b-2">
        <OffCanvas onChangeFilter={handleFilterChange} categories={filter} />

        <form className="mx-auto py-2">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative w-96">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm border-none outline-none text-slate-300 bg-gray-800 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
              placeholder="Search for API..."
              required
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
      <div className="flex flex-col w-3/5 mx-auto items-center justify-center px-12">
        <div className="flex flex-wrap mx-6 justify-normal gap-3">
          <Items
            currentItems={currentItems}
            filter={filter}
            highlight={highlight}
          />
        </div>
        <footer className="sticky bottom-0">
          <div className="p-4">
            <ReactPaginate
              containerClassName=""
              className="flex flex-row"
              onPageChange={handlePageClick}
              pageCount={Math.ceil(filteredEntries.length / itemsPerPage)}
              renderOnZeroPageCount={null}
              pageRangeDisplayed={3}
              pageClassName={
                "w-10 h-10 mx-1 pl-4 pt-2 text-slate-500 font-semibold bg-slate-800"
              }
              activeClassName="text-slate-600 bg-slate-100"
              breakLabel="..."
              previousLabel={
                <div className="w-10 h-10 mx-1 pl-4 pt-3 bg-slate-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="18px"
                    viewBox="0 -960 960 960"
                    width="18px"
                    fill="#e2e8f0"
                  >
                    <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
                  </svg>
                </div>
              }
              nextLabel={
                <div className="w-10 h-10 mx-1 pl-3 pt-3 text-semibold bg-slate-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="18px"
                    viewBox="0 -960 960 960"
                    width="18px"
                    fill="#e2e8f0"
                  >
                    <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                  </svg>
                </div>
              }
            />
          </div>
        </footer>
      </div>
    </>
  );
}

export default Contentful;
