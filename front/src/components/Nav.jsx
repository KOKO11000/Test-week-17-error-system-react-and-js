import React, { useState } from "react";

export default function Nav() {
  const [search, setSearch] = useState("");
//   const theme = useContext(GlobalContext)

  return (
    <div>
      <nav className="flex justify-around border-b min-h-14 items-center ">
        <div>
          <label htmlFor="search" className="font-semibold">
            Search:{" "}
          </label>
          <input
            type="text"
            id="search"
            className="boder min-h-2.5 nim-w-2.5 bg-white font-semibold"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="year" className="font-semibold">
            Year:{" "}
          </label>
          <input
            type="text"
            id="search"
            className="boder min-h-2.5 nim-w-2.5 bg-white font-semibold"
          />
        </div>
        <div>
          <label htmlFor="year" className="font-semibold">
            Year:{" "}
          </label>
          <input
            type="text"
            id="search"
            className="boder min-h-2.5 nim-w-2.5 bg-white font-semibold"
          />
        </div>
        <button
          type="button"
          className="border pl-2.5 pr-2.5 rounded bg-blue-500 hover:bg-blue-600 font-semibold"
        >
          Filter
        </button>
      </nav>
    </div>
  );
}
