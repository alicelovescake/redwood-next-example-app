import { IoTrashOutline } from "react-icons/io5";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

import { useNominations } from "../context/NominationsContext";

export default function MovieCard({ movie }) {
  const movieGenres = movie.Genre.split(",");
  let rating = parseFloat(movie.imdbRating);
  let stars = [];
  while (rating > 1) {
    stars.push(<BsStarFill />);
    rating--;
  }
  if (rating > 0 && rating < 1) {
    stars.push(<BsStarHalf />);
  }

  const poster =
    movie.Poster === "N/A" ? "/images/empty-poster.jpg" : movie.Poster;

  const { handleRemoveNomination } = useNominations();

  return (
    <div className="relative bg-white rounded-lg shadow-xl h-56 mt-24">
      <div
        className="w-52 h-72 bg-cover bg-center rounded-lg absolute -mt-24 ml-6 shadow-lg"
        style={{ backgroundImage: `url(${poster})` }}
      ></div>

      <div className="ml-64 py-8 pr-8 h-full flex flex-col justify-between">
        <div className="h-full">
          <div className="font-bold text-xl text-brand-green-dark mb-2">
            {movie.Title} ({movie.Year})
          </div>

          <div className="space-x-2">
            {movieGenres.map((genre) => (
              <div className="text-xs text-brand-off-white bg-brand-green rounded inline-block px-2 py-1">
                {genre}
              </div>
            ))}
          </div>

          <div className="text-xs mt-4 hidden lg:block">{movie.Plot}</div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center text-brand-green">
            {stars.map((star) => star)}
          </div>

          <IoTrashOutline
            className="text-xl hover:text-brand-green-dark hover:cursor-pointer transition duration-500 ease-in-out transform hover:scale-125"
            onClick={() => handleRemoveNomination(movie)}
          />
        </div>
      </div>
    </div>
  );
}
