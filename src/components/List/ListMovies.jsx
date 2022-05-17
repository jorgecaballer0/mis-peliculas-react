import React, { useEffect, useState } from "react";
import EditMovie from "../EditMovies/EditMovie";

const Listado = ({ listMovies, setListMovies }) => {
  const [editList, setEditList] = useState(0);
  useEffect(() => {
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMovies = () => {
    const movies = JSON.parse(localStorage.getItem("movies"));

    setListMovies(movies);

    return movies;
  };

  const deleteMovie = (id) => {
    // Conseguir el listado de peliculas actual
    let moviesStorage = getMovies();
    // Filtrar el listado de peliculas para obtener el que no se quiere eliminar
    let newMovieStorage = moviesStorage.filter(
      (movie) => movie.id !== parseInt(id)
    );
    // Se actualiza el state del componente padre
    setListMovies(newMovieStorage);
    // Se actualiza en el localStorage
    localStorage.setItem("movies", JSON.stringify(newMovieStorage));
  };

  return (
    <>
      {listMovies !== null ? (
        listMovies.map((movie) => {
          return (
            <article key={movie.id} className="peli-item">
              <h3 className="title">{movie.title}</h3>
              <p className="description">{movie.description}</p>
              <button
                className="edit"
                onClick={() => {
                  setEditList(movie.id);
                }}
              >
                Editar
              </button>
              <button
                className="delete"
                onClick={() => {
                  deleteMovie(movie.id);
                }}
              >
                Borrar
              </button>
              {editList === movie.id && (
                <EditMovie
                  movie={movie}
                  getMovies={getMovies}
                  setEditList={setEditList}
                  setListMovies={setListMovies}
                />
              )}
            </article>
          );
        })
      ) : (
        <div className="NotMovies">
          <h1>
            No hay peliculas, ingrese una por favor!
          </h1>
        </div>
      )}
    </>
  );
};

export default Listado;
