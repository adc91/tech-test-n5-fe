import React, { Fragment } from "react";

const FormMovie = ({ onChange }) => {
  return (
    <Fragment>
      <div className="row">
        <div className="col col--12">
          <label htmlFor="title">Nombre de la Serie/Película:</label>
          <input
            type="text"
            className="u-full-width"
            name="title"
            placeholder="Ej: The Big Bang Theory"
            onChange={onChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col col--12 m--top-20">
          <label htmlFor="file">Imagen de Portada de Serie/Película:</label>
          <input type="file" className="u-full-width" name="image" />
        </div>
      </div>
    </Fragment>
  );
};

export default FormMovie;
