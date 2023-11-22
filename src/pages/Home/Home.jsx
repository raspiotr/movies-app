import React, { useEffect, useState } from 'react';
import { fetchTrending } from 'js/api';
import { TitlesList } from '../../components/TitlesList/TitlesList';
import { Loader } from '../../components/Loader/Loader';
import Notiflix from 'notiflix';
import css from './Home.module.css';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = () => {
      setIsLoading(true);

      fetchTrending()
        .then(trendingMovies => {
          setMovies(trendingMovies);
        })
        .catch(error => {
          Notiflix.Notify.failure(
            'Ooops... Something went wrong! Please, try again.'
          );
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    fetchTrendingMovies();
  }, []);

  return (
    <main>
      <div className={css.TrendingBox}>
        <h1 className={css.Title}>Trending today</h1>
        {isLoading && <Loader />}
        <TitlesList movies={movies} />
      </div>
    </main>
  );
};
export default Home;
