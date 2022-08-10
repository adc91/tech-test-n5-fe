import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";

import FormMovieInfo from "./FormMovieInfo";
import FormMovieActors from "./FormMovieActors";

import {
    StyledForm,
    StyledH3,
    StyledButtonSubmit,
} from "../styles/Form.styled";
import { StyledButton } from "../styles/Button.styled";
import { StyledHr } from "../styles/Tags.styled";
import { StyledAlert } from "../styles/Alert.styled";

import { API_URL } from "../../vars";
import { fetchAPI } from "../../services/api";

const FormMovieMain = () => {
    const [isSubmitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState({});

    const {
        setValue,
        getValues,
        register,
        reset,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const {
        fields: actors,
        append,
        remove,
    } = useFieldArray({
        control,
        name: "actors",
    });

    const onSubmit = (data) => {
        const formData = new FormData();

        formData.append("title", data.title);
        formData.append("cover", data.cover_file);
        formData.append("actors", JSON.stringify(data.actors));

        setSubmitting(true);

        fetchAPI(`${API_URL}/movies`, formData)
            .then((response) => {
                if (response.success !== true)
                    throw new Error(
                        "Su formulario no ha sido enviado. Por favor, recargue la página e intente nuevamente."
                    );

                reset();
                handleAfterSubmitMessage({
                    className: "__success",
                    message:
                        "La serie y/o película ha sido agregada correctamente.",
                });
            })
            .catch((err) => {
                handleAfterSubmitMessage({
                    className: "__danger",
                    message: err,
                });
            })
            .finally(() => setSubmitting(false));
    };

    const handleAfterSubmitMessage = (message) => {
        setMessage(message);

        setTimeout(() => {
            setMessage({});
        }, 4000);
    };

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <FormMovieInfo
                fieldName="movie"
                setValue={setValue}
                getValues={getValues}
                register={register}
                errors={errors}
            />
            <StyledH3>Reparto</StyledH3>
            {actors.map((item, index) => {
                return (
                    <FormMovieActors
                        key={item.id}
                        index={index}
                        fieldName="actors"
                        setValue={setValue}
                        getValues={getValues}
                        register={register}
                        remove={remove}
                        errors={errors}
                    />
                );
            })}

            <StyledButton
                variant="secondary"
                size="small"
                type="button"
                onClick={() => {
                    append({});
                }}
            >
                Agregar
            </StyledButton>

            <StyledHr />

            {Object.keys(message).length > 0 && (
                <StyledAlert className={message.className}>
                    {message.message}
                </StyledAlert>
            )}

            <StyledButtonSubmit
                variant="primary"
                type="submit"
                center
                disabled={isSubmitting}
            >
                {isSubmitting ? "Enviando" : "Enviar"}
            </StyledButtonSubmit>
        </StyledForm>
    );
};

export default FormMovieMain;
