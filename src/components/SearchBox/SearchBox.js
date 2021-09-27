import "./SearchBox.css";
import { BiSearchAlt2, BiXCircle } from "react-icons/bi";
import { useState } from "react";
const SearchBox = () => {
  const [showSearchBox, setShowSearchBox] = useState(false);

  const searchBox = (
    <div className="relative searchBox">
      <input
        className="py-1 pr-7 border-2 outline-none rounded-md border-gray-400 w-32 focus:border-blue-500"
        type="search"
      />
      <BiXCircle
        className="absolute right-2 cursor-pointer top-1/2 transform -translate-y-1/2"
        onClick={() => setShowSearchBox(false)}
      />
    </div>
  );
  return (
    <>
      {showSearchBox ? (
        searchBox
      ) : (
        <div
          onClick={() => setShowSearchBox(true)}
          className="p-2 bg-p-gray-box rounded-md cursor-pointer"
        >
          <BiSearchAlt2 />
        </div>
      )}
    </>
  );
};

export default SearchBox;
