import React from "react";
import styled from "styled-components";
import noPoster from "../img/popcorn.png";
import PropTypes from "prop-types";

const Container = styled.div`
    position: relative;
    opacity: 0;
    animation-name: fromLeft;
    animation-fill-mode: forwards;
    animation-duration: 0.7s;
    animation-delay: ${props => `${props.delay}s`};
    @keyframes fromLeft {
        0% {
            left: -30px;
            opacity: 0;
        }
        100% {
            left: 0;
            opacity: 1;
        }
    }
`;

const Image = styled.div`
    background-image: url(${props => props.bgUrl});
    height: 200px;
    background-size: cover;
    background-position: center center;
`;

const Title = styled.div`
    width: 140px;
    font-weight: 500;
    font-family: "Poppins", "Noto Sans KR", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 17px;
    margin-top: 10px;
    text-shadow: 2px 2px 3px #000;
`;

const Year = styled.div`
    font-size: 12px;
    opacity: 0.7;
    font-family: "Poppins", sans-serif;
    margin-top: 5px;
    text-shadow: 2px 2px 3px #000;
`;



const Season = ({ bgUrl, name, date, delay }) => (
    <Container delay={delay}>
        <Image bgUrl={bgUrl ? `https://image.tmdb.org/t/p/w300${bgUrl}` : noPoster} />
        <Title>{name}</Title>
        <Year>{ date }</Year>
    </Container>
);

Season.propTypes = {
    bgUrl: PropTypes.string,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    delay: PropTypes.number.isRequired
}

export default Season;