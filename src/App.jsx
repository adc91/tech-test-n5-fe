import React from "react";
import { Routes, Route } from "react-router-dom";

import GlobalStyles from "./components/styles/GlobalStyles";
import { Container, ContainerFluid } from "./components/grid/Container";

import Main from "./components/grid/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Detail from "./pages/Detail";

import "./styles/vendor/bootstrap-reboot.min.css";
import "./styles/vendor/bootstrap-grid.min.css";

const App = () => {
    return (
        <>
            <GlobalStyles />
            <ContainerFluid className="g-0">
                <Header />
                <Container>
                    <Main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/show/:id" element={<Detail />} />
                        </Routes>
                    </Main>
                    <Footer />
                </Container>
            </ContainerFluid>
        </>
    );
};

export default App;
