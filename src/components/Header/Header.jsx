import { NavLink } from 'react-router-dom';

import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <div className="container">
        <nav>
          <ul className={css.list}>
            <li>
              <NavLink to="/" className={css.item}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies" className={css.item}>
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

