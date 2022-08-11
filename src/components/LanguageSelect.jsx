import i18next from "i18next";

import { StyledSelect } from "./styles/Form.styled";
import { useEffect } from "react";

const languageMap = {
    es: { label: "Español", dir: "ltr" },
    en: { label: "English", dir: "ltl" },
};

const LanguageSelect = () => {
    const selected = localStorage.getItem("i18nextLng") || "es";

    const onChange = (e) => {
        const language = e.target.value;
        console.log(language);
        i18next.changeLanguage(language);
    };

    useEffect(() => {
        document.body.dir = languageMap[selected].dir;
    }, [selected]);

    return (
        <StyledSelect
            onChange={onChange}
            defaultValue={selected}
            width="150px"
            name="language"
            className="form-select"
        >
            {Object.keys(languageMap)?.map((item, index) => (
                <option key={index} value={item}>
                    {languageMap[item].label}
                </option>
            ))}
        </StyledSelect>
    );
};

export default LanguageSelect;
