import {
    StyledError,
    StyledFormControl,
    StyledInput,
    StyledLabel,
} from "../styles/Form.styled";
import InputFileWithUpload from "./InputFileWithUpload";

const FormMovieInfo = ({ setValue, getValues, register, errors }) => {
    return (
        <>
            <StyledFormControl>
                <StyledLabel>Nombre de la Serie/Película:</StyledLabel>
                <StyledInput
                    type="text"
                    {...register("title", {
                        required: "Por favor, ingrese el título.",
                    })}
                ></StyledInput>
                {errors?.title && (
                    <StyledError>{errors?.title.message}</StyledError>
                )}
            </StyledFormControl>

            <StyledFormControl>
                <StyledLabel>Imagen (Cover):</StyledLabel>
                <InputFileWithUpload
                    setValue={setValue}
                    getValues={getValues}
                    register={register}
                    fieldName="cover"
                    endpoint="upload/images"
                />
                {errors?.cover && (
                    <StyledError>{errors?.cover.message}</StyledError>
                )}
            </StyledFormControl>
        </>
    );
};

export default FormMovieInfo;
