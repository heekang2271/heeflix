import React, {useEffect, useRef} from "react";
import styled from "styled-components";

const Container = styled.div`
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    opacity: 0;
    animation-name: fromBottom;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-delay: 1s;
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

    & iframe {
        box-shadow: 0px 0px 10px #000;
    }
`;

const MainVideo = styled.div`
    width: 100%;
    max-width: 600px;

    & iframe {
        width: 100%;
        height: 320px;
    }
    background-color: #000;
`;

const SubVideo = styled.div`
    display: flex;
    height: 220px;
    width: 100%;
    overflow-x: scroll;
    margin-top: 30px;
    padding-bottom: 20px;

    &::-webkit-scrollbar {
        height: 15px;
    }

    &::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: #303030;
        box-shadow: inset 0px 0px 5px #000000;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-clip: padding-box;
        border: 4px solid transparent;
        background-color: #E50914;
    }

    @media only screen and (min-width: 820px) {
        width: initial;
        max-width: 800px;
    }
`;

const VideoBox = styled.div`
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
`;

const Holder = styled.div`
    width: 240px;
    margin: 0 10px;

    & iframe {
        width: 100%;
        height: 130px;
    }
    position: relative;
`;

const Cover = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #FFF;
    z-index: 10;
    opacity: 0;
    cursor: pointer;
`;


export default ({ videos }) => {
    const element = useRef();
    const init = useRef();
    let current = null;
    const handleClick = (event) => {
        const { target } = event;
        const iframe = target.parentNode.querySelector("iframe");
        const src = iframe.getAttribute("src");
        element.current.setAttribute("src", src);
        
        if (current === null) {
            current = init.current.children[0].querySelector("iframe");
        } 
        current.style.border = "none";
        iframe.style.border = "2px solid #E50914";
        current = iframe;
    }

    return (
        <Container>
            <MainVideo>
                <iframe ref={element} src={`https://www.youtube.com/embed/${videos[0].key}`} allowFullScreen></iframe>
            </MainVideo>
            <SubVideo>
                <VideoBox ref={init}>
                    {videos.map((video, index) => (
                        <Holder key={index}>
                            <iframe src={`https://www.youtube.com/embed/${video.key}`} style={{ border: `2px solid ${index === 0 ? "#E50914" : "transparent"}` }}></iframe>
                            <Cover onClick={handleClick}></Cover>
                        </Holder>
                    ))}
                </VideoBox>
            </SubVideo>
        </Container>
    )
};