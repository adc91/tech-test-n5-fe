import React from "react";

import Row from "./grid/Row";
import Col from "./grid/Col";

import FormMovieMain from "./form/FormMovieMain";

const Form = () => {
    return (
        <Row>
            <Col cols="col col-md-6">
                <FormMovieMain />
            </Col>
            <Col cols="col col-md-6">
                <FormMovieMain />
            </Col>
        </Row>
    );
};

export default Form;
