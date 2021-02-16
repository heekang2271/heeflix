import React, {useRef, useEffect} from "react";
import styled from "styled-components";

const ADD_HEIGHT = 150;

const Container = styled.div`
    width: 100%;
    &:not(:last-child) {
        margin-bottom: 70px;
    }

    & > div {
        position: relative;
        animation-duration: 1s;
        animation-fill-mode: forwards;
        width: 100%;
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

export default ({ children }) => {
    const useFadeIn = () => {
        const element = useRef();
        const screenHeight = window.innerHeight;
        let posY = 0;
        let show = false;

        const getScrollY = () => {
            if (element.current && posY + ADD_HEIGHT > screenHeight) {
                const { current } = element;
                const scrollY = window.scrollY;
                if (screenHeight + scrollY > posY + ADD_HEIGHT && !show) {
                    current.style.animationName = "fromBottom";
                    show = true;
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
                {children}
            </div>
        </Container>
    )
}