import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loader } from '../../components/Loader/Loader';
import { fetchMovieActors } from '../../js/api';
import Notiflix from 'notiflix';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadMovieCast() {
      try {
        setIsLoading(true);
        const response = await fetchMovieActors(movieId);

        if (response.length === 0) {
          return;
        }

        setMovieCast(response);
      } catch (error) {
        Notiflix.Notify.failure(
          'Ooops... Something went wrong! Please, try again.'
        );
      } finally {
        setIsLoading(false);
      }
    }

    loadMovieCast();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}

      {movieCast.length !== 0 ? (
        <ul className={css.ActorsList}>
          {movieCast.map(
            ({ id, profile_path, original_name, name, character }) => (
              <li key={id}>
                <img
                  className={css.ActorImage}
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500${profile_path}`
                      : `https://optoelectronics.ece.ucsb.edu/sites/default/files/styles/normalized/public/default_images/photo_not_available.png?itok=PRt9ESle`
                  }
                  alt={original_name}
                />
                <p className={css.ActorName}>{name}</p>
                <p className={css.Character}>
                  Character: <br /> {character}
                </p>
              </li>
            )
          )}
        </ul>
      ) : (
        <p>Cast is not available.</p>
      )}
    </div>
  );
};

export default Cast;
