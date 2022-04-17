import useSWR from "swr";
import MovieResult from "./MovieResult";
import { useNominations } from "../context/NominationsContext";

export default function Search({ query, onNominate }) {
  const { nominations } = useNominations();
  const { data, error } = useSWR(`/api/movies?search=${query}`, (...args) =>
    fetch(...args).then((res) => res.json())
  );

  if (error)
    return (
      <div className="absolute top-0 bg-white rounded-b-lg shadow-2xl w-full mt-16 z-20">
        <h2 className="text-gray-600 text-sm p-4">
          Whoops, something went wrong. Try again!
        </h2>
      </div>
    );

  if (!data)
    return (
      <div className="absolute top-0 bg-white rounded-b-lg shadow-2xl w-full mt-16 z-20">
        <h2 className="text-gray-600 text-sm p-4">Looking for your movie!</h2>
      </div>
    );

  const resultMessage =
    nominations.length < 5
      ? "Select a movie to nominate!"
      : "You have no nominations left!";

  return (
    <div className="absolute top-0 bg-white rounded-b-lg shadow-2xl w-full mt-16 z-20">
      <h2 className="text-gray-600 text-sm p-4">
        {data.length ? resultMessage : <>No movies found</>}
      </h2>

      {data.map((movie) => (
        <MovieResult key={movie.imdbID} movie={movie} onNominate={onNominate} />
      ))}
    </div>
  );
}
