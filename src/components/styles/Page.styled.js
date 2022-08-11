import styled from "styled-components";

import { StyledH3 as H3, StyledH2 as H2, StyledH1 as H1 } from "./Tags.styled";

export const StyledH1 = styled(H1)`
    margin: 20px 0;
`;

export const StyledH2 = styled(H2)`
    margin-top: 20px;
`;

export const StyledH3 = styled(H3)`
    color: #f3ce13;

    &.__actors {
        margin-top: 40px;
    }
`;

export const StyledListItem = styled.div`
    padding: 30px 0;
    border-bottom: 3px solid #f3ce13;

    &:last-child {
        border-bottom: none;
    }
`;

export const StyledListAvatar = styled.div`
    border: 3px solid #f3ce13;
    border-radius: 100px;
    width: 90px;
    height: 90px;
    background-image: url("${(props) => props.backgroundImage}");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

export const StyledListPeople = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 18px;
`;
