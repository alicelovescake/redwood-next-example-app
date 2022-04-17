import MovieCard from "../components/MovieCard";
import Banner from "../components/Banner";
import SharedNominations from "../components/SharedNominations";
import { useNominations } from "../context/NominationsContext";

export default function Nominations() {
  const { nominations } = useNominations();
  return (
    <>
      <SharedNominations />

      <div className="mt-8 grid xl:grid-cols-2 gap-20">
        {nominations.length >= 5 && <Banner />}

        {nominations.map((nomination) => (
          <MovieCard key={nomination.imdbID} movie={nomination} />
        ))}
      </div>
    </>
  );
}
