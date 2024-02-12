import { fetchReview } from 'helpers/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [revInfo, setRevInfo] = useState([]);

  useEffect(() => {
    fetchReview(movieId)
      .then(data => setRevInfo(data.results))
      .catch(error => console.error(error));
  }, [movieId]);

  const elements = revInfo
    .filter(({ author_details: { rating } }) => rating !== null)
    .slice(0, 3)
    .map(({ author, content, id, author_details: { rating } }) => (
      <li key={id} className={css.item}>
        <h3 className={css.name}>Author: {author}</h3>
        <p className={css.rating}>Author rating: {rating}</p>
        <p className={css.content}>{content}</p>
      </li>
    ));

  return (
    <ul className={css.list}>
      {revInfo.length > 0 ? (
        elements
      ) : (
        <p>We don't have ane reviewsfor this movie.</p>
      )}
    </ul>
  );
};

export default Reviews;
