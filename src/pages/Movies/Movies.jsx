import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';
import { Searchbar } from '../../components/Searchbar/Searchbar';
import { TitlesList } from '../../components/TitlesList/TitlesList';
import { fetchSearchMovies } from 'js/api';
import Notiflix from 'notiflix';
import css from './Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const queryFromURL = searchParams.get('query');

  const [query, setQuery] = useState(queryFromURL || '');

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function loadSearchMovies() {
      try {
        setIsLoading(true);
        const response = await fetchSearchMovies(query);
        if (response.length === 0) {
          Notiflix.Notify.warning(
            'Sorry, there are no movies matching your search query. Please try again.'
          );
          return;
        }
        setMovies(response);
      } catch (error) {
        Notiflix.Notify.failure(
          'Ooops... Something went wrong! Please, try again.'
        );
      } finally {
        setIsLoading(false);
      }
    }

    loadSearchMovies();
  }, [query]);

  const handleSearch = myQuery => {
    setQuery(myQuery);
    myQuery !== '' ? setSearchParams({ query: myQuery }) : setSearchParams({});
    setMovies([]);
  };

  return (
    <main>
      <Searchbar onSubmit={handleSearch} />
      {isLoading && <Loader />}
      {movies.length !== 0 && (
        <div className={css.TitlesBox}>
          <TitlesList movies={movies} />
        </div>
      )}
    </main>
  );
};

export default Movies;
