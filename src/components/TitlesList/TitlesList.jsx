import { useLocation, Link } from 'react-router-dom';

const TitlesList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </>
  );
};

export default TitlesList;
