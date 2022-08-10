import styled from "styled-components";

export const StyledH1 = styled.h1`
    font-size: 30px;
`;

export const StyledH3 = styled.h3`
    font-size: 22px;
`;

export const StyledHr = styled.hr`
    border: 1px solid #ced4da;
    margin: 5px 0;
`;

export const StyledImg = styled.img`
    width: ${(props) => props.width || "auto"};
    height: ${(props) => props.height || "auto"};
`;
