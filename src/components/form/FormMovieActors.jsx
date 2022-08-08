import { StyledButton } from "../styles/Button.styled";
import {
  StyledError,
  StyledFieldSet,
  StyledFormControl,
  StyledInput,
  StyledLabel,
} from "../styles/Form.styled";

const FormMovieActors = ({ index, fieldName, remove, register, errors }) => {
  return (
    <StyledFieldSet>
      <StyledFormControl>
        <StyledLabel>Nombre y Apellido:</StyledLabel>
        <StyledInput
          type="text"
          {...register(`${fieldName}.${index}.fullName`, {
            required: "Por favor, ingrese el Nombre y Apellido.",
          })}
        ></StyledInput>
        {errors?.[`${fieldName}`]?.[index]?.fullName && (
          <StyledError>
            {errors?.[`${fieldName}`]?.[index]?.fullName.message}
          </StyledError>
        )}
      </StyledFormControl>

      <StyledFormControl>
        <StyledLabel>Foto:</StyledLabel>
        <StyledInput
          type="file"
          accept="image/png, image/gif, image/jpeg"
          {...register(`${fieldName}.${index}.photo`, {
            required: "Por favor, seleccione una foto.",
          })}
        ></StyledInput>
        {errors?.[`${fieldName}`]?.[index]?.photo && (
          <StyledError>
            {errors?.[`${fieldName}`]?.[index]?.photo.message}
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
};

export default FormMovieActors;
