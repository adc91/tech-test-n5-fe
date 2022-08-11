import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Row from "../components/grid/Row";
import Col from "../components/grid/Col";

import {
    StyledH1,
    StyledH3,
    StyledListAvatar,
    StyledListPeople,
} from "../components/styles/Page.styled";
import { StyledImg, StyledP } from "../components/styles/Tags.styled";

import { API_URL } from "../vars";
import { fetchAPI } from "../services/api";
import { ButtonRouterLink } from "../components/styles/Router.styled";

const Detail = () => {
    const [movie, setMovie] = useState({});
    const { id } = useParams();
    const { t } = useTranslation();

    useEffect(() => {
        fetchAPI(`${API_URL}/movies/${id}`).then((response) => {
            setMovie(response);
        });
    }, [id]);

    return (
        <>
            <StyledH1>{movie?.title}</StyledH1>
            <Row>
                <Col cols="col-12 col-md-4">
                    {movie?.cover?.length > 0 && (
                        <StyledImg
                            style={{
                                maxHeight: 600,
                            }}
                            src={movie.cover}
                            alt={movie?.title}
                            center
                        />
                    )}
                </Col>
                <Col cols="col-12 col-md-8">
                    <StyledH3>{movie?.title}</StyledH3>
                    <StyledP>{movie?.description}</StyledP>
                    {movie?.actors?.length > 0 && (
                        <StyledH3 className="__actors">{t("cast")}</StyledH3>
                    )}
                    <Row>
                        {movie?.actors?.map((item, index) => {
                            return (
                                <Col
                                    key={index}
                                    cols="col-12 col-md-6"
                                    style={{ marginTop: 20 }}
                                >
                                    <Row>
                                        <Col cols="col-12 col-md-3">
                                            <StyledListAvatar
                                                backgroundImage={
                                                    item.photo_file
                                                }
                                            ></StyledListAvatar>
                                        </Col>
                                        <Col cols="col-12 col-md-9">
                                            <StyledListPeople>
                                                {item.fullName}
                                            </StyledListPeople>
                                        </Col>
                                    </Row>
                                </Col>
                            );
                        })}
                    </Row>
                </Col>
            </Row>
            <ButtonRouterLink variant="secondary" margin="30px 0" to="/">
                {t("goback")}
            </ButtonRouterLink>
        </>
    );
};

export default Detail;
