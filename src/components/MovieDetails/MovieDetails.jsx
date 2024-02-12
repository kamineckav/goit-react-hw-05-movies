import { fetchDetails } from 'helpers/api';
import { Suspense, useEffect, useRef, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [info, setInfo] = useState({});

  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    fetchDetails(movieId)
      .then(data => setInfo(data))
      .catch(error => console.error(error));
  }, [movieId]);

  const dateString = info.release_date;
  const dateObject = new Date(Date.parse(dateString));
  const year = dateObject.getFullYear();

  return (
    <div className="container">
      <div className={css.coverBack}>
        <NavLink to={backLinkLocation.current} className={css.button}>
          Go back
        </NavLink>
      </div>
      <div className={css.mainInfo}>
        <div className={css.imgBlock}>
          <img
            src={`https://image.tmdb.org/t/p/original/${info.poster_path}`}
            alt={info.title}
            className={css.img}
          />
        </div>
        <div className={css.textBlock}>
          <div>
            <h1 className={css.mainTitle}>
              {info.title}
              <br />({year})
            </h1>
            <p className={css.textScore}>
              <span className={css.textBolt}>User Score:</span>{' '}
              {info.vote_average}%
            </p>
          </div>
          <div className={css.blockOverview}>
            <h2 className={css.secondTitle}>Overview</h2>
            <p className={css.text}>{info.overview}</p>
          </div>
          <div>
            <h2 className={css.secondTitle}>Genres</h2>
            <ul className={css.listGenres}>
              {info.poster_path &&
                info.genres.map(gener => (
                  <li key={gener.id} className={css.textGener}>
                    {gener.name}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <ul className={css.list}>
        <li>
          <NavLink to="cast" className={css.button}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" className={css.button}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <Suspense> {<Outlet />}</Suspense>
    </div>
  );
};

export default MovieDetails;
