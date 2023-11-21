import React, { useEffect, useState } from 'react';
import { fetchTrending } from 'js/api';
import TitlesList from 'components/TitlesList/TitlesList';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = () => {
      setLoading(true);

      fetchTrending()
        .then(trendingMovies => {
          setMovies(trendingMovies);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchTrendingMovies();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <ul>{<TitlesList movies={movies} />}</ul>
      {loading && <Loader />}
    </main>
  );
};
export default Home;
