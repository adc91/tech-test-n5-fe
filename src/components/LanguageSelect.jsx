import i18next from "i18next";

import { StyledSelect } from "./styles/Form.styled";

const languageMap = {
    es: { label: "Español" },
    en: { label: "English" },
};

const LanguageSelect = () => {
    const selected = localStorage.getItem("i18nextLng") || "es";

    const onChange = (e) => {
        const language = e.target.value;
        console.log(language);
        i18next.changeLanguage(language);
    };

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
