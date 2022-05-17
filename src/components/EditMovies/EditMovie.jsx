import React from "react";

const EditMovie = ({ movie, getMovies, setEditList, setListMovies }) => {
  const titleComponent = "Editar Pelicula";

  const saveEdit = (e, id) => {
    e.preventDefault();
    // Conseguir el target del formulario
    let target = e.target;
    // Buscar el indice del objeto que se quiere editar
    const moviesStorage = getMovies();
    const index = moviesStorage.findIndex((movie) => movie.id === id);
    // Crear el objeto con id de ese indice, titulo y descripcion
    let movieEdit = {
      id,
      title: target.title.value,
      description: target.description.value,
    };
    // Actualizar el objeto con ese indice
    moviesStorage[index] = movieEdit;
    // Guarda en el localStorage
    localStorage.setItem("movies", JSON.stringify(moviesStorage));
    // Actualizar los estados
    setListMovies(moviesStorage);
    setEditList(null);
  };

  return (
    <>
      <div className="editForm">
        <h3 className="title">{titleComponent}</h3>
        <form onSubmit={(e) => saveEdit(e, movie.id)}>
          <input type="text" name="title" defaultValue={movie.title} />
          <textarea name="description" defaultValue={movie.description} />
          <input type="submit" value="Actualizar" className="submitEdit" />
        </form>
      </div>
    </>
  );
};

export default EditMovie;
