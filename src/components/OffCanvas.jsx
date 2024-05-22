import { useEffect, useState, useMemo } from "react";

const initialActiveFilter = {
  eCommerce: false,
  Data: false,
  Finance: false,
  Social: false,
  Education: false,
  Entertainment: false,
  Music: false,
  AI: false,
  Weather: false,
};

function OffCanvas({ onChangeFilter, categories }) {
  const [show, setShow] = useState(false);
  const [activeFilter, setActiveFilter] = useState(initialActiveFilter);

  useEffect(() => {
    setActiveFilter(initialActiveFilter);
  }, []);

  useEffect(() => {
    console.log(activeFilter);
  }, [activeFilter]);

  const colors = useMemo(
    () => ({
      eCommerce:
        "py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-gray-100",
      Data: "py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-purple-400 bg-purple-100",
      Finance:
        "py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-indigo-400 bg-indigo-100",
      Social:
        "py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-green-400 bg-green-100",
      Education:
        "py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-blue-400 bg-blue-100",
      Entertainment:
        "py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-pink-400 bg-pink-100",
      Music:
        "py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-yellow-400 bg-yellow-100",
      AI: "py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-red-400 bg-red-100",
      Weather:
        "py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-cyan-400 bg-cyan-100",
    }),
    []
  );

  const handleClick = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const isActive = activeFilter[name];

    setActiveFilter((prev) => ({
      ...prev,
      [name]: !isActive,
    }));

    const updatedCategories = isActive
      ? categories.filter((category) => category !== name)
      : [...categories, name];

    onChangeFilter(updatedCategories);
  };

  const getClassNames = (name) =>
    activeFilter[name]
      ? colors[name]
      : "py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-gray-400 bg-sky-200";

  return (
    <>
    
      <div
        id="menu-wrapper"
        className="justify-center h-lvh fixed transition-transform"
      >
        <div id="iconbar" className="flex flex-row justify-between">
          <div className="pl-6 pt-5" onClick={() => setShow(!show)}>
            <svg
              id="open-menu"
              xmlns="http://www.w3.org/2000/svg"
              height="32px"
              viewBox="0 -960 960 960"
              width="32px"
              fill="#64748b"
              class="hover:fill-current hover:text-slate-300"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </div>




          {show && (
            <div className="-mx-16 h-screen border-gray-500 border-r-2 bg-slate-800 dark:bg-gray-800">
              <div
                id="inner-content-wrapper"
                className="pl-5 pt-5"
              >
                <div className="pb-4 flex flex-row justify-start">
                  <div className="pl-3">
                    <svg
                      id="close-menu"
                      onClick={() => setShow(!show)}
                      xmlns="http://www.w3.org/2000/svg"
                      height="32px"
                      viewBox="0 -960 960 960"
                      width="32px"
                      fill="#64748b"
                      class="hover:fill-current hover:text-slate-300"
                    >
                      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                    </svg>
                  </div>
                </div>
                <div
                  id="Subheading"
                  className="pl-4 pb-4 font-bold text-slate-300"
                >
                  Tags
                </div>
                <ul className="flex flex-wrap px-2 w-56 justify-start">
                  {Object.keys(initialActiveFilter).map((key) => (
                    <li key={key} className="my-1 px-2">
                      <div className={getClassNames(key)}>
                        <a
                          href=""
                          name={key}
                          className="text-sky-900"
                          onClick={handleClick}
                        >
                          {key}
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      
    </>
  );
}

export default OffCanvas;
