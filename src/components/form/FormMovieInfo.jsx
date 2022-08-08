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
        {errors?.[`${fieldName}`]?.[index]?.title && (
          <StyledError>
            {errors?.[`${fieldName}`]?.[index]?.title.message}
          </StyledError>
        )}
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
        {errors?.[`${fieldName}`]?.[index]?.cover && (
          <StyledError>
            {errors?.[`${fieldName}`]?.[index]?.cover.message}
          </StyledError>
        )}
      </StyledFormControl>
    </>
  );
};

export default FormMovieInfo;
