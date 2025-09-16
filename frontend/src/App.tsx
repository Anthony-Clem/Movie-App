import { Route, Routes } from "react-router";
import HomePage from "./routes/home-page";
import AuthLayout from "./routes/layouts/auth-layout";
import MainLayout from "./routes/layouts/main-layout";
import SignUpPage from "./routes/auth/signup-page";
import LoginPage from "./routes/auth/login-page";
import MoviesPage from "./routes/movies/movies-page";
import MoviePage from "./routes/movies/movie-page";
import TvShowsPage from "./routes/tv-shows/tv-shows-page";
import TvShowPage from "./routes/tv-shows/tv-show-page";
import BookmarksPage from "./routes/bookmarks-page";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/tv-shows" element={<TvShowsPage />} />
        <Route path="/tv-shows/:id" element={<TvShowPage />} />
        <Route path="/bookmarks" element={<BookmarksPage />} />
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="/auth/signup" element={<SignUpPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};
export default App;
