import { useState, useEffect, useContext, createContext } from "react";

const NominationsContext = createContext();

export function useNominations() {
  return useContext(NominationsContext);
}

export function NominationsProvider({ children }) {
  const [nominations, setNominations] = useState([]);
  const [nominationQueue, setNominationQueue] = useState([]);

  useEffect(() => {
    const newQueue = [...nominationQueue];
    const nomination = newQueue.shift();

    if (nomination) {
      fetch(`/api/movie?id=${nomination.imdbID}`)
        .then((res) => res.json())
        .then((movie) => {
          setNominations([movie, ...nominations]);
          setNominationQueue(newQueue);
        });
    }
  }, [nominationQueue.length]);

  const handleNomination = (nomination) => {
    if (nominations.length < 5) {
      setNominationQueue([...nominationQueue, nomination]);
    }
  };

  const handleRemoveNomination = (nomination) => {
    setNominations(
      nominations.filter((movie) => movie.imdbID !== nomination.imdbID)
    );
  };

  return (
    <NominationsContext.Provider
      value={{
        nominations,
        handleNomination,
        handleRemoveNomination,
        setNominations,
      }}
    >
      {children}
    </NominationsContext.Provider>
  );
}
