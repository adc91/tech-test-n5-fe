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

  const { fields, append, remove } = useFieldArray({
    control,
    name: "actors",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Col cols="col col-6">
          <FormMovieInfo register={register} errors={errors} />
        </Col>
      </Row>

      <StyledHr />

      <Row>
        <Col cols="col col-6">
          <StyledH3>Reparto</StyledH3>
          {fields.map((item, index) => {
            return (
              <FormMovieActors
                key={item.id}
                index={index}
                remove={remove}
                register={register}
                errors={errors}
              />
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
