import styled from "styled-components";

export const StyledH1 = styled.h1`
    font-size: 30px;
`;

export const StyledH2 = styled.h2`
    font-size: 26px;
`;

export const StyledH3 = styled.h3`
    font-size: 22px;
`;

export const StyledP = styled.p`
    color: #212529;
    margin: 3px 0;
`;

export const StyledSpan = styled.span`
    &.__bold {
        font-weight: bold;
    }
`;

export const StyledHr = styled.hr`
    border: 1px solid #ced4da;
    margin: 5px 0;
`;

export const StyledImg = styled.img`
    width: ${(props) => props.width || "auto"};
    height: ${(props) => props.height || "auto"};
    margin-bottom: ${(props) => props.marginBottom || "inherit"};
    margin-top: ${(props) => props.marginTop || "inherit"};

    ${({ center }) =>
        center === true &&
        `
            display: table;
            margin: 0 auto;
        `}
`;
