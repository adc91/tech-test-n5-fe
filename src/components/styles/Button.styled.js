import styled from "styled-components";

export const StyledButton = styled.button`
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    border-radius: 10px;
    border: 1px solid transparent;
    color: #FFF;
    cursor: pointer;
    display: inline-block;
    font-size: 15px
    font-weight: regular;
    line-height: 18px;
    padding: 10px 30px;
    margin: ${(props) => props.margin || "10px 0"};
    text-align: center;
    text-decoration: none;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    user-select: none;
    vertical-align: middle;

    ${({ variant }) =>
      variant === "primary" &&
      `
      border: 1px solid #0D6EFD;
      background-color: #0D6EFD;

      &:hover,
      &:active,
      &:focus {
          background-color: #0a58ca;
    }`}

    ${({ variant }) =>
      variant === "secondary" &&
      `
      border: 1px solid #565e64;
      background-color: #565e64;

      &:hover,
      &:active,
      &:focus {
          background-color: #51585e;
    }`}

    ${({ variant }) =>
      variant === "danger" &&
      `
      border: 1px solid #b02a37;
      background-color: #b02a37;

      &:hover,
      &:active,
      &:focus {
          background-color: #a52834;
    }`}

    ${({ size }) =>
      size === "small" &&
      `
        font-size: 12px
        font-weight: regular;
        line-height: 15px;
        padding: 5px 15px;
        border-radius: 5px;
    }`}

    ${({ center }) =>
      center &&
      `
      margin: 0 auto;
      display: table;
  }`}
`;
