import { fetchTrend } from '../../helpers/api';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import css from './HomePage.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetchTrend()
      .then(({ results }) => setMovies(results))
      .catch();
  }, []);

  const listMovies = movies.map(({ id, title, poster_path }) => (
    <li key={id} className={css.item}>
      <div className={css.hover}>
        <NavLink to={`/movies/${id}`} state={location} className={css.navLink}>
          <div className={css.containerHome}>
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
              className={css.img}
            />
            <p className={css.text}>{title}</p>
          </div>
        </NavLink>
      </div>
    </li>
  ));

  return (
    <div className="container">
      <h1 className={css.main_title}>Trending today</h1>
      <ul className={css.list}>{listMovies}</ul>
    </div>
  );
};

export default Home;
