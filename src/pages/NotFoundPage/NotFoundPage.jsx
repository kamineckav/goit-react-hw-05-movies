import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div>
      <h1 className={css.not_found}>Not Found Page</h1>
      <Link className={css.btn_home} to="/">
        Go to home page
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
      </Link>
    </div>
  );
}

export default NotFoundPage;
