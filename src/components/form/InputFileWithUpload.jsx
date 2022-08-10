import { useEffect, useState } from "react";
import { StyledImgPreview, StyledInput } from "../styles/Form.styled";
import { StyledImg } from "../styles/Tags.styled";

import { API_URL } from "../../vars";
import { fetchAPI } from "../../services/api";

const InputFileWithUpload = ({
    fieldName,
    setValue,
    getValues,
    register,
    endpoint,
}) => {
    const [onUpload, setOnUpload] = useState(false);
    const [filePreview, setFilePreview] = useState("");
    const [fileInputWatch, setFileInputWatch] = useState(false);

    const onInput = async (e) => {
        const file = e.target.files[0];

        setOnUpload(true);
        generatePreview(file);

        // Prepare data form api post
        const formData = new FormData();
        formData.append("file", file);

        fetchAPI(`${API_URL}/${endpoint}`, formData)
            .then((response) => {
                const { data } = response;

                setFilePreview(data.url);
                setValue(`${fieldName}_file`, data.file);
            })
            .catch(() => {
                setFilePreview("");
            })
            .finally(() => {
                setOnUpload(false);
            });
    };

    const generatePreview = (file) => setFilePreview(URL.createObjectURL(file));

    useEffect(() => {
        const inputWatch = getValues(fieldName);
        setFileInputWatch(inputWatch?.length);
    });

    return (
        <>
            <StyledInput
                type="file"
                accept="image/png, image/jpeg"
                onInput={onInput}
                {...register(fieldName, {
                    required: "Por favor, seleccione el cover.",
                    validate: {
                        lessThan10MB: (files) =>
                            files[0]?.size < 1000000 || "Max 1MB",
                        acceptedFormats: (files) =>
                            ["image/jpeg", "image/png"].includes(
                                files[0]?.type
                            ) || "Sólo PNG, JPEG e GIF",
                    },
                })}
            ></StyledInput>
            <StyledInput
                type="hidden"
                {...register(`${fieldName}_file`, {
                    value: "",
                })}
            />
            {fileInputWatch ? (
                <StyledImgPreview>
                    <StyledImg
                        width="150px"
                        src={filePreview}
                        className={onUpload ? "do-upload__active" : ""}
                    />
                </StyledImgPreview>
            ) : null}
        </>
    );
};

export default InputFileWithUpload;
