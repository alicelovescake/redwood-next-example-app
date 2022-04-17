import { useRef, useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

import Search from "../components/Search";
import useOnClickOutside from "../hooks/useOnClickOutside";

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const [displayResults, setDisplayResults] = useState(false);
  const searchBox = useRef();

  useOnClickOutside(searchBox, () => setDisplayResults(false));

  useEffect(() => {
    setDisplayResults(query.length > 3);
  }, [query]);

  const handleNomination = () => {
    setQuery("");
    setDisplayResults(false);
  };

  return (
    <div className="relative z-10 mt-8" ref={searchBox}>
      <BiSearchAlt className="absolute left-0 mt-3 ml-2 z-20 text-5xl text-gray-400" />

      <input
        type="text"
        id="search"
        placeholder="What movie is on your mind?"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded-lg text-2xl lg:text-4xl p-4 focus:ring-brand-green relative z-10 pl-16 placeholder-brand-green placeholder-opacity-30"
      />

      {displayResults && <Search query={query} onNominate={handleNomination} />}
    </div>
  );
}
