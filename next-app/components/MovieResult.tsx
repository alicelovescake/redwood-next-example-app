import { useNominations } from "../context/NominationsContext";

export default function MovieResult({ movie, onNominate }) {
  const { nominations, handleNomination } = useNominations();

  const isNominated = nominations.find(
    (nomination) => nomination.imdbID === movie.imdbID
  );

  const nominateMovie = () => {
    onNominate(movie);
    if (!isNominated) {
      handleNomination(movie);
    }
  };

  const nominatedClasses =
    isNominated || nominations.length >= 5
      ? "text-gray-400"
      : "hover:bg-brand-green hover:bg-opacity-10 hover:font-bold hover:cursor-pointer hover:text-brand-green-dark";

  return (
    <div className={`${nominatedClasses} p-4`} onClick={nominateMovie}>
      {movie.Title} ({movie.Year})
    </div>
  );
}
