import React, {useRef, useEffect} from "react";
import styled from "styled-components";

const ADD_HEIGHT = 200;

const Container = styled.div`
    &:not(:last-child) {
        margin-bottom: 70px;
    }

    & > div {
        position: relative;
        animation-duration: 1s;
        animation-fill-mode: forwards;
    }

    @keyframes fromBottom {
        0% {
            bottom: ${`-50px`};
            opacity: 0;
        }

        100% {
            bottom: 0;
            opacity: 1;
        }
    }
`;

const Title = styled.h2`
    font-size: 24px;
    margin-bottom: 30px;
    font-family: "Kanit", sans-serif;
`;

const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 150px);
    grid-gap: 25px;
`;

export default ({ title, children }) => {
    const useFadeIn = () => {
        const element = useRef();
        const screenHeight = window.innerHeight;
        let posY = 0;

        const getScrollY = () => {
            if (element.current && posY + ADD_HEIGHT > screenHeight) {
                const { current } = element;
                const scrollY = window.scrollY;
                if (screenHeight + scrollY > posY + ADD_HEIGHT) {
                    current.style.animationName = "fromBottom";
                }
            }
        }

        useEffect(() => {
            if (element.current) {
                const { current } = element;
                posY = current.getBoundingClientRect().top;
                if (posY + ADD_HEIGHT > screenHeight) {
                    current.style.opacity = 0;
                }
            }
            window.addEventListener("scroll", getScrollY);
            return () => window.removeEventListener("scroll", getScrollY);
        })

        return {ref: element}
    }
    const { ref } = useFadeIn();
    return (
        <Container>
            <div ref={ref}>
                <Title>{title}</Title>
                <Content>
                    {children}
                </Content>
            </div>
        </Container>
    )
}