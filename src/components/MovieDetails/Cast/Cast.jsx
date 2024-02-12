import { fetchCast } from 'helpers/api';
import { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [actorInfo, setActorInfo] = useState([]);
  useEffect(() => {
    fetchCast(movieId)
      .then(data => {
        setActorInfo(data.cast.slice(0, 10));
      })
      .catch(error => console.error(error));
  }, [movieId]);

  const elements = actorInfo.map(
    ({ id, profile_path, name }) =>
      profile_path && (
        <li key={id} className={css.item}>
          <img
            loading="lazy"
            src={`https://image.tmdb.org/t/p/original/${profile_path}`}
            alt={name}
            className={css.img}
          />
          <h3 className={css.name}>{name}</h3>
        </li>
      )
  );

  return (
    <Suspense>
      <ul className={css.list}>{elements}</ul>
    </Suspense>
  );
};

export default Cast;
