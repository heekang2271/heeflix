import React from "react";
import styled from "styled-components";

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Box = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 170px;
    height: 170px;
`;

const Text = styled.span`
    font-size: 20px;
    animation: fade 3s infinite linear;
    font-family: 'Prompt', sans-serif;

    @keyframes fade {
        0% {
            opacity: 1;
        }

        50% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
`;

const Loader = styled.div`
    position:absolute;
    top: 0;
    left: 0;
    width: 170px;
    height: 170px;
    animation: rotate 3s infinite linear;
    border: 2px solid transparent;
    border-top: 2px solid #FFF;
    border-bottom: 2px solid #FFF;
    border-radius: 100%;

    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(359deg);
        }
    }
`;

export default () => (
    <Container>
        <Box>
            <Text>LOADING</Text>
            <Loader />
        </Box>
    </Container>
);