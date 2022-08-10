import { StyledButton } from "../styles/Button.styled";
import {
    StyledError,
    StyledFieldSet,
    StyledFormControl,
    StyledInput,
    StyledLabel,
} from "../styles/Form.styled";
import InputFileWithUpload from "./InputFileWithUpload";

const FormMovieActors = ({
    index,
    fieldName,
    setValue,
    getValues,
    register,
    remove,
    errors,
}) => {
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
                <InputFileWithUpload
                    fieldName={`${fieldName}.${index}.photo`}
                    setValue={setValue}
                    getValues={getValues}
                    register={register}
                    endpoint="upload/images"
                />
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
