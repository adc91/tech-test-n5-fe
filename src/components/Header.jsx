import { useTranslation } from "react-i18next";

import {
    StyledBoxSelect,
    StyledHeader,
    StyledNav,
} from "./styles/Header.styled";

import Row from "../components/grid/Row";
import Col from "../components/grid/Col";

import logo from "../assets/images/logo-imdb.png";
import { Container } from "./grid/Container";
import { StyledLabel } from "./styles/Form.styled";

import LanguageSelect from "./LanguageSelect";

export const Header = () => {
    const { t } = useTranslation();

    return (
        <StyledHeader>
            <Container>
                <StyledNav>
                    <Row>
                        <Col cols="col col-md-6">
                            <img src={logo} className="nav__logo" alt="Logo" />
                        </Col>
                        <Col cols="col col-md-6">
                            <StyledBoxSelect>
                                <StyledLabel>
                                    {t("select_language")}
                                </StyledLabel>
                                <LanguageSelect />
                            </StyledBoxSelect>
                        </Col>
                    </Row>
                </StyledNav>
            </Container>
        </StyledHeader>
    );
};

export default Header;
