import styled from "styled-components";

export const StyledAlert = styled.div`
    position: relative;
    padding: 20px;
    margin: 10px 0;
    border: 1px solid #fff;

    &.__success {
        color: #0f5132;
        background-color: #d1e7dd;
        border-color: #badbcc;
    }

    &.__danger {
        color: #842029;
        background-color: #f8d7da;
        border-color: #f5c2c7;
    }
`;
