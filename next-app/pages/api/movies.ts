export default async (req, res) => {
  if (req.query.search.length <= 3) {
    res.status(200).json([]);
    return;
  }

  const response = await fetch(
    `http://www.omdbapi.com/?s=${req.query.search}&apikey=${process.env.OMDB_KEY}&type=movie`
  );
  const data = await response.json();

  res.status(200).json(data?.Search || []);
};
