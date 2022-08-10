import { StyledNav } from "./styles/Header.styled";
import { StyledH1 } from "./styles/Tags.styled";

import logo from "../assets/images/logo-imdb.png";

export const Header = () => {
    return (
        <header>
            <StyledNav>
                <img src={logo} className="nav__logo" alt="Logo" />
            </StyledNav>
            <StyledH1>Agregar nueva Película/Serie</StyledH1>
        </header>
    );
};

export default Header;
