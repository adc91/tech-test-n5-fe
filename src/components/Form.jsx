import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledH3,
  StyledFieldSet,
  StyledError,
  StyledFormControl,
  StyledButtonSubmit,
} from "./styles/Form.styled";
import { StyledButton } from "./styles/Button.styled";
import { StyledRow, StyledCol } from "./styles/Grid.styled";
import { StyledHr } from "./styles/Tags.styled";

const Form = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
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
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledRow className="row">
        <StyledCol className="col col-6">
          <StyledFormControl>
            <StyledLabel>Nombre de la Serie/Película:</StyledLabel>
            <StyledInput
              type="text"
              {...register("title", {
                required: "Por favor, ingrese el título.",
              })}
            ></StyledInput>
            {errors.title && <StyledError>{errors.title.message}</StyledError>}
          </StyledFormControl>

          <StyledFormControl>
            <StyledLabel>Imagen (Cover):</StyledLabel>
            <StyledInput
              type="file"
              accept="image/png, image/gif, image/jpeg"
              {...register("cover", {
                required: "Por favor, seleccione el cover.",
              })}
            ></StyledInput>
            {errors.cover && <StyledError>{errors.cover.message}</StyledError>}
          </StyledFormControl>
        </StyledCol>
      </StyledRow>

      <StyledHr />

      <StyledRow className="row">
        <StyledCol className="col col-6">
          <StyledH3>Reparto</StyledH3>
          {fields.map((item, index) => {
            return (
              <StyledFieldSet key={item.id}>
                <StyledFormControl>
                  <StyledLabel>Nombre y Apellido:</StyledLabel>
                  <StyledInput
                    type="text"
                    {...register(`actors.${index}.fullName`, {
                      required: "Por favor, ingrese el Nombre y Apellido.",
                    })}
                  ></StyledInput>
                  {errors?.["actors"]?.[index]?.fullName && (
                    <StyledError>
                      {errors?.["actors"]?.[index]?.fullName.message}
                    </StyledError>
                  )}
                </StyledFormControl>

                <StyledFormControl>
                  <StyledLabel>Foto:</StyledLabel>
                  <StyledInput
                    type="file"
                    accept="image/png, image/gif, image/jpeg"
                    {...register(`actors.${index}.photo`, {
                      required: "Por favor, seleccione una foto.",
                    })}
                  ></StyledInput>
                  {errors?.["actors"]?.[index]?.photo && (
                    <StyledError>
                      {errors?.["actors"]?.[index]?.photo.message}
                    </StyledError>
                  )}
                </StyledFormControl>

                <StyledButton
                  variant="danger"
                  size="small"
                  className="float__end"
                  onClick={() => remove(index)}
                >
                  Eliminar
                </StyledButton>
              </StyledFieldSet>
            );
          })}

          <StyledButton
            variant="secondary"
            type="button"
            onClick={() => {
              append({});
            }}
          >
            Agregar
          </StyledButton>
        </StyledCol>
      </StyledRow>

      <StyledHr />

      <StyledButtonSubmit variant="primary" type="submit" center>
        Enviar
      </StyledButtonSubmit>
    </StyledForm>
  );
};

export default Form;
