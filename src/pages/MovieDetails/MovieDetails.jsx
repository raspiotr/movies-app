import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { BackLink } from '../../components/BackLink/BackLink';
import { Loader } from '../../components/Loader/Loader';
import { fetchMovieDetails } from '../../js/api';
import Notiflix from 'notiflix';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [prevLocation, setPrevLocation] = useState(null);
  const [query, setQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    setPrevLocation(location);
    const searchParams = new URLSearchParams(location.search);
    setQuery(searchParams.get('query') || '');
  }, [location]);

  const backLinkHref =
    prevLocation?.state?.from ?? (query ? `/movies?query=${query}` : '/');

  useEffect(() => {
    async function loadMovieDetails() {
      try {
        setIsLoading(true);
        const response = await fetchMovieDetails(movieId);
        if (response.length === 0) {
          Notiflix.Notify.warning(
            'Sorry, details about this movie are not available.'
          );
          return;
        }
        setMovieDetails(response);
      } catch (error) {
        Notiflix.Notify.failure(
          'Ooops... Something went wrong! Please, try again.'
        );
      } finally {
        setIsLoading(false);
      }
    }

    loadMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return;
  }

  const {
    title,
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movieDetails;

  return (
    <main>
      <BackLink to={backLinkHref}>Go back</BackLink>
      {isLoading && <Loader />}
      {movieDetails && (
        <div className={css.Box}>
          <div>
            <img
              className={css.Image}
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : `https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/original.png`
              }
              alt={original_title}
            />
          </div>
          <div>
            <h1 className={css.Title}>
              {title} ({release_date.slice(0, 4)})
            </h1>
            {title !== original_title && (
              <p className={css.OriginalTitle}>{original_title}</p>
            )}
            <p>User Score: {Math.round(vote_average * 10)}%</p>
            <h2>Overview</h2>
            <p>{overview ? overview : 'This movie has no overview yet.'}</p>
            <h2>Genres</h2>
            <ul className={css.GenresList}>
              {genres.length !== 0
                ? genres.map(item => <li key={item.id}>{item.name}</li>)
                : 'No genres assigned.'}
            </ul>
          </div>
        </div>
      )}
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </main>
  );
};

export default MovieDetails;
