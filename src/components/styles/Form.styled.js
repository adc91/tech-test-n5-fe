import styled from "styled-components";

import { StyledH3 as H3 } from "./Tags.styled";
import { StyledButton as Button } from "./Button.styled";

export const StyledForm = styled.form`
  margin-top: 20px;
`;

export const StyledFieldSet = styled.fieldset`
  border: 1px solid rgba(243, 206, 19, 0.5);
  padding: 10px;
  margin-bottom: 30px;
`;

export const StyledFormControl = styled.div`
  margin: 20px 0;
`;

export const StyledLabel = styled.label`
  display: inline-block;
  margin-bottom: 5px;
`;

export const StyledInput = styled.input`
    background-clip: padding-box;
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #ced4da;
    color: #212529;
    display: block;
    font-size: 15px;
    font-weight: 400;
    line-height: 15px;
    padding: 10px;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    width: 100%;
    margin-bottom: ${(props) => props.marginBottom || "0"}
}
`;

export const StyledError = styled.span`
  font-size: 12px;
  color: #b02a37;
`;

export const StyledH3 = styled(H3)`
  margin: 20px 0;
`;

export const StyledButtonSubmit = styled(Button)`
  margin-top: 30px;
`;
