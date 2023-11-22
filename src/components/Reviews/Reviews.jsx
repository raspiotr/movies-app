import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loader } from '../Loader/Loader';
import { fetchMovieReviews } from '../../js/api';
import Notiflix from 'notiflix';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadMovieReviews() {
      try {
        setIsLoading(true);
        const response = await fetchMovieReviews(movieId);

        if (response.length === 0) {
          return;
        }

        setMovieReviews(response);
      } catch (error) {
        Notiflix.Notify.failure(
          'Ooops... Something went wrong! Please, try again.'
        );
      } finally {
        setIsLoading(false);
      }
    }

    loadMovieReviews();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}

      {movieReviews.length !== 0 ? (
        <div>
          <ul className={css.RevsList}>
            {movieReviews.map(({ id, author, content }) => (
              <li key={id}>
                <h2 className={css.RevAuthor}>Author: {author}</h2>
                <p className={css.RevContent}>{content}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <p>We don't have any reviews for this movie.</p>
        </div>
      )}
    </div>
  );
};

export default Reviews;
