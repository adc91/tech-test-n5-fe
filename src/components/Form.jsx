import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

import Row from "./grid/Row";
import Col from "./grid/Col";

import FormMovieInfo from "./form/FormMovieInfo";
import FormMovieActors from "./form/FormMovieActors";

import { StyledForm, StyledH3, StyledButtonSubmit } from "./styles/Form.styled";
import { StyledButton } from "./styles/Button.styled";
import { StyledHr } from "./styles/Tags.styled";

const Form = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Form 1
  const {
    fields: movieOneFields,
    append: movieOneAppend,
    remove: movieOneRemove,
  } = useFieldArray({
    control,
    name: "actorsOne",
  });

  // Form 2
  const {
    fields: movieTwoFields,
    append: movieTwoAppend,
    remove: movieTwoRemove,
  } = useFieldArray({
    control,
    name: "actorsTwo",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Col cols="col col-6">
          <FormMovieInfo
            index={0}
            fieldName="movieInfo"
            register={register}
            errors={errors}
          />
        </Col>
        <Col cols="col col-6">
          <FormMovieInfo
            index={1}
            fieldName="movieInfo"
            register={register}
            errors={errors}
          />
        </Col>
      </Row>

      <StyledHr />

      <Row>
        <Col cols="col col-6">
          <StyledH3>Reparto</StyledH3>
          {movieOneFields.map((item, index) => {
            return (
              <FormMovieActors
                key={item.id}
                index={index}
                fieldName="actorsOne"
                remove={movieOneRemove}
                register={register}
                errors={errors}
              />
            );
          })}

          <StyledButton
            variant="secondary"
            type="button"
            onClick={() => {
              movieOneAppend({});
            }}
          >
            Agregar
          </StyledButton>
        </Col>

        <Col cols="col col-6">
          <StyledH3>Reparto</StyledH3>
          {movieTwoFields.map((item, index) => {
            return (
              <FormMovieActors
                key={item.id}
                index={index}
                fieldName="actorsTwo"
                remove={movieTwoRemove}
                register={register}
                errors={errors}
              />
            );
          })}

          <StyledButton
            variant="secondary"
            type="button"
            onClick={() => {
              movieTwoAppend({});
            }}
          >
            Agregar
          </StyledButton>
        </Col>
      </Row>

      <StyledHr />

      <StyledButtonSubmit variant="primary" type="submit" center>
        Enviar
      </StyledButtonSubmit>
    </StyledForm>
  );
};

export default Form;
