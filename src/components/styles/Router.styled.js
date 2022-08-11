import styled from "styled-components";
import { Link } from "react-router-dom";

import { StyledCssButon } from "./Button.styled";

export const ButtonRouterLink = styled(Link)`
    ${StyledCssButon}

    &:hover {
        color: #fff;
    }
`;
