import {
  StyledError,
  StyledFormControl,
  StyledInput,
  StyledLabel,
} from "../styles/Form.styled";

const FormMovieInfo = ({ index, fieldName, register, errors }) => {
  return (
    <>
      <StyledFormControl>
        <StyledLabel>Nombre de la Serie/Película:</StyledLabel>
        <StyledInput
          type="text"
          {...register(`${fieldName}.${index}.title`, {
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
          {...register(`${fieldName}.${index}.cover`, {
            required: "Por favor, seleccione el cover.",
          })}
        ></StyledInput>
        {errors.cover && <StyledError>{errors.cover.message}</StyledError>}
      </StyledFormControl>
    </>
  );
};

export default FormMovieInfo;
