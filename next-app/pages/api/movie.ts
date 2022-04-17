export default async (req, res) => {
  const movieData = await fetch(
    `http://www.omdbapi.com/?i=${req.query.id}&apikey=${process.env.OMDB_KEY}&type=movie`
  );
  let movie = await movieData.json();

  res.status(200).json(movie || {});
};
