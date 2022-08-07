import React, { Fragment } from "react";
import { useForm, useFieldArray } from "react-hook-form";

import Button from "../components/shared/Button";

const Form = () => {
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      actors: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "actors",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="form form--container">
      <h3 className="m--top-40">Cargar nueva Película/Serie</h3>
      <div className="form--cointainer form--container--items-box m--top-20">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col col--6">
              <div className="form-container form--items">
                <div className="row">
                  <div className="col col--12">
                    <label htmlFor="title">
                      Nombre de la Serie y/o Película:
                    </label>
                    <input
                      type="text"
                      className="u-full-width"
                      placeholder="Ej: The Big Bang Theory"
                      {...register("title", {
                        required:
                          "Por favor, ingrese el título de la Serie y/o Película",
                      })}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col col--12 m--top-20">
                    <label htmlFor="file">
                      Imagen de Portada de Serie/Película:
                    </label>
                    <input
                      type="file"
                      className="u-full-width"
                      {...register("cover", {
                        required:
                          "Por favor, seleccione el cover de la Serie y/o Película",
                      })}
                    />
                  </div>
                </div>
                <hr className="my--20" />
                <h4>Reparto</h4>
                <div className="row form--items form--items--container">
                  {fields.map((item, index) => {
                    return (
                      <Fragment key={item.id}>
                        <div className="row">
                          <div className="col col--12">
                            <label htmlFor={`title-${index}`}>
                              Nombre Completo
                            </label>
                            <input
                              id={`title-${index}`}
                              type="text"
                              className="u-full-width"
                              placeholder="Sheldon Cooper"
                              {...register(`actors.${index}.fullName`, {
                                required: "Este campo es obligatorio",
                              })}
                            />
                          </div>
                          <div className="col col--12 m--top-20">
                            <label htmlFor={`file-${index}`}>Foto</label>
                            <input
                              id={`file-${index}`}
                              type="file"
                              className="u-full-width"
                              {...register(`actors.${index}.photo`, {
                                required: "Este campo es obligatorio",
                              })}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <button
                            className="btn btn--warning btn--danger u-pull--right"
                            type="button"
                            onClick={() => remove(index)}
                          >
                            Eliminar
                          </button>
                        </div>
                      </Fragment>
                    );
                  })}
                </div>
                <div className="row">
                  <div className="col">
                    <button
                      className="btn btn--success"
                      type="button"
                      onClick={() => {
                        append({ fullName: "" });
                      }}
                    >
                      Agregar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="my--20" />
          <div className="row">
            <div className="col">
              <Button
                label="Guardar"
                classCss="btn--primary mx--auto"
                type="submit"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
