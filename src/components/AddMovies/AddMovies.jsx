import React, { useState } from "react";
import { saveInLocalStorage } from "../utils/saveInLocalStorage";

const AddMovies = ({ setListMovies }) => {
  const titleComponent = "Añadir película";

  const [movie, setMovie] = useState({
    title: "",
    description: "",
  });

  const { title, description } = movie;

  const getFormValue = (e) => {
    e.preventDefault();
    let target = e.target;
    let title = target.title.value;
    let description = target.description.value;
    // Objeto que se va a guardar en el state
    let dataMovie = {
      id: new Date().getTime(),
      title,
      description,
    };
    // Se actualiza el state
    setMovie(dataMovie);

    // Se actualiza el state del componente padre
    setListMovies((elements) => {
      return [...elements, dataMovie];
    });

    // Se guarda en localStorage
    saveInLocalStorage("movies", dataMovie);
  };

  return (
    <div className="add">
      <h3 className="title">{titleComponent}</h3>
      <p>{title && description && "Añadiste la pelicula: " + title}</p>
      <form onSubmit={getFormValue}>
        <input
          required
          type="text"
          id="title"
          name="title"
          placeholder="Titulo"
        />
        <textarea
          required
          id="description"
          name="description"
          placeholder="Descripción"
        ></textarea>
        <input type="submit" id="save" value="Guardar" />
      </form>
    </div>
  );
};

export default AddMovies;
