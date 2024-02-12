import SearchForm from 'components/SearchForm/SearchForm';
import { fetchSearch } from 'helpers/api';
import { useEffect, useState } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import css from './MoviesPage.module.css';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const text = searchParams.get('querty') ?? '';
  const [movieList, setMovieList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (!text) return;
    fetchSearch(text)
      .then(data => setMovieList(data.results))
      .catch(error => console.error(error));
  }, [text]);

  const elements = movieList.map(
    ({ original_title, id, backdrop_path, poster_path, title }) =>
      backdrop_path && (
        <li key={id} className={css.containerHome}>
          <NavLink
            className={css.navLink}
            to={`/movies/${id}`}
            state={{ from: location }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
              className={css.img}
            />
            <p className={css.text}>{original_title}</p>
          </NavLink>
        </li>
      )
  );

  return (
    <div className="container">
      <SearchForm setSearchParams={setSearchParams} />
      <ul className={css.list}>{elements}</ul>
    </div>
  );
};

export default Movies;
