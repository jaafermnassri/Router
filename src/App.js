import "./App.css";
import { useState } from "react";
import NavigationBar from "./NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Details from "./pages/details";
import Addmov from "./pages/addmov";
import Movies from "./pages/movielist";
import data from "./data";

const App = () => {
  const [movies, setMovies] = useState(data);
  const handleAdd = (filmjdid) => {
    setMovies([...movies, { ...filmjdid, _id: movies.length }]);
  };
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<Details movies={movies} />} />
        <Route path="/addmov" element={<Addmov handleAdd={handleAdd} />} />
        <Route path="/movies" element={<Movies data={movies} />} />
      </Routes>
    </div>
  );
};

export default App;
