import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Layout from './Layout/Layout';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./MovieDetails/Cast/Cast'));
const Reviews = lazy(() => import('./MovieDetails/Reviews/Reviews'));

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
};
