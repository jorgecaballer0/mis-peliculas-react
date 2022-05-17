import React, { useState } from "react";

const Buscados = ({ listMovies, setListMovies }) => {
  const [search, setSearch] = useState("");
  const [notFound, setNotFound] = useState(false);

  const searchMovies = (e) => {
    e.preventDefault();
    // Crear estado y actualizarlo
    setSearch(e.target.value);
    // Filtrar para buscar coincidencias
    let filteredMovies = listMovies.filter((movie) => {
      return movie.title.toLowerCase().includes(search.toLocaleLowerCase());
    });
    if (search.length <= 1 || filteredMovies <= 0) {
      filteredMovies = JSON.parse(localStorage.getItem("movies"));
      setNotFound(true);
    } else {
      setNotFound(false);
    }
    // Actualiar el estado con lo filtrado
    setListMovies(filteredMovies);
  };

  return (
    <div className="search">
      <h3 className="title">Buscador: {search}</h3>
      {notFound === true && search.length > 1 && (
        <span className="notFound">No hay coincidencias</span>
      )}
      <form>
        <input
          type="text"
          name="search"
          id="search_field"
          autoComplete="off"
          onChange={searchMovies}
        />
        <button>Buscar</button>
      </form>
    </div>
  );
};

export default Buscados;
