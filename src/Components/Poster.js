import React from "react";
import styled from "styled-components";
import noPoster from "../img/popcorn.png";

const Image = styled.div`
    background-image: url(${props => props.bgUrl});
    height: 180px;
    background-size: cover;
    background-position: center center;
`;

const Rating = styled.div`
    position: absolute;
    right: 10px;
    bottom: 10px;
    font-size: 12px;
    font-family: 'Poppins', sans-serif;
    opacity: 0;
    text-shadow: 2px 2px 2px black;
`;

const Container = styled.div`
    width: 100%;
    &:hover {
        ${Image} {
            opacity: 0.5;
            transform: scale(1.1);
            transition: 0.5s;
        }

        ${Rating} {
            opacity: 1;
        }
    }
`;

const ImageBox = styled.div`
    position: relative;
    margin-bottom: 10px;
    overflow: hidden;
`;

const Title = styled.div`
    width: 140px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 500;
    font-family: "Poppins", "Noto Sans KR", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
    height: 20px;
`;

const Year = styled.div`
    font-size: 12px;
    opacity: 0.7;
`;

export default ({id, imageUrl, title, rating, year, isMovie}) => (
    <Container>
        <ImageBox>
            <Image bgUrl={imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : noPoster}></Image>
            <Rating>⭐{ rating } / 10.0</Rating>
        </ImageBox>
        <Title>{title}</Title>
        <Year>{year}</Year>
    </Container>
)