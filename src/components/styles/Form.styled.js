import styled from "styled-components";

import arrow from "../../assets/images/arrow.svg";

export const StyledSelect = styled.select`
    display: block;
    width: ${(props) => props.width || "100%"};
    padding: 5px 10px;
    font-size: 15px;
    font-weight: 400;
    line-height: 22px;
    color: #212529;
    background-color: #fff;
    background-image: url(${arrow});
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 16px 12px;
    border: 1px solid #ced4da;
    border-radius: 0.375rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    appearance: none;
`;

export const StyledLabel = styled.label`
    color: #fff;
    display: inline-block;
    margin-right: 10px;
`;
