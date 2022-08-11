import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import Row from "../components/grid/Row";
import Col from "../components/grid/Col";

import { StyledH2, StyledListItem } from "../components/styles/Page.styled";
import {
    StyledH3,
    StyledImg,
    StyledP,
    StyledSpan,
} from "../components/styles/Tags.styled";
import { ButtonRouterLink } from "../components/styles/Router.styled";

import { API_URL } from "../vars";
import { fetchAPI } from "../services/api";

const Home = () => {
    const [movies, setMovies] = useState([]);

    const { t } = useTranslation();

    useEffect(() => {
        fetchAPI(`${API_URL}/movies`).then((response) => setMovies(response));
    }, []);

    return (
        <>
            <StyledH2>{t("latest_added")}</StyledH2>
            {movies.map((movie, index) => {
                return (
                    <StyledListItem key={index}>
                        <Row>
                            <Col cols="col-12 col-md-4">
                                <StyledImg
                                    height="300px"
                                    src={`${API_URL}/images/${movie.cover}`}
                                    alt={movie.title}
                                    center
                                />
                            </Col>
                            <Col cols="col-12 col-md-8">
                                <StyledH3>{movie.title}</StyledH3>
                                <StyledP>
                                    <StyledSpan className="__bold">
                                        {t("episodes")}:
                                    </StyledSpan>{" "}
                                    145
                                </StyledP>
                                <StyledP>
                                    <StyledSpan className="__bold">
                                        {t("country_origin")}:
                                    </StyledSpan>{" "}
                                    Estados Unidos
                                </StyledP>
                                <ButtonRouterLink
                                    variant="primary"
                                    to={`/show/${movie._id}`}
                                >
                                    {t("more_details")}
                                </ButtonRouterLink>
                            </Col>
                        </Row>
                    </StyledListItem>
                );
            })}
        </>
    );
};

export default Home;
