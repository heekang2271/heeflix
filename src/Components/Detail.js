import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
    display: flex;
    height: calc(100vh - 260px);
    font-family: "Poppins", "Noto Sans KR", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const Poster = styled.div`
    background-image: url(${props => props.bgImage});
    background-size: cover;
    background-position: center center;
    height: 100%;
    max-height: 680px;
    opacity: 0;
    animation-name: fade;
    animation-fill-mode: forwards;
    animation-duration: 1s;
    animation-delay: 1s;
    @keyframes fade {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    z-index: -1;

    @media only screen and (min-width: 800px) {
        margin-right: 50px;
        width: 40%;
    }
`;

const Data = styled.div`
    position: relative;
    left: -50px;
    opacity: 0;
    animation-name: fromLeft;
    animation-fill-mode: forwards;
    animation-duration: 0.7s;
    animation-delay: 2s;
    @keyframes fromLeft {
        0% {
            left: -50px;
            opacity: 0;
        }
        100% {
            left: 0;
            opacity: 1;
        }
    }
    @media only screen and (min-width: 800px) {
        width: 50%;
    }
`;

const Title = styled.div`
    font-size: 32px;
    font-weight: 500;
`;

const ItemContainer = styled.div`
    margin-top: 20px;
`;

const Item = styled.span`
    font-size: 18px;
`;

const Divider = styled.span`
    margin: 0 10px;
`;

const OverView = styled.p`
    font-size: 18px;
    margin-top: 40px;
    line-height: 1.5;
`;

const LinkContainer = styled.div`
    margin-top: 20px;
    display: flex;
`;

const Imdb = styled.div`
    background-color: #E2B616;
    color: #000;
    padding: 5px 7px;
    border-radius: 5px;
    font-weight: 800;
`;

const Detail = ({ bgImage, title, year, runtime, genres, overview, imdb }) => (
    <Container>
        <Poster bgImage={bgImage} />
        <Data>
            <Title>{title}</Title>
            <ItemContainer>
                <Item>{year}</Item>
                <Divider>·</Divider>
                <Item>{`${runtime} min`}</Item>
                <Divider>·</Divider>
                <Item>
                {
                    genres && genres.map((genre, index) => (
                        index === genres.length - 1 ? genre.name : `${genre.name} / `
                    ))
                }
                </Item>
            </ItemContainer>
            <LinkContainer>
                <a href={ imdb } target="_blank">
                    <Imdb>IMDb</Imdb>
                </a>
            </LinkContainer>
            <OverView>{ overview }</OverView>
        </Data>
    </Container>
)

Detail.propTypes = {
    bgImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string,
    runtime: PropTypes.string,
    genres: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string
        })
    ),
    overview: PropTypes.string,
    imdb: PropTypes.string
}

export default Detail;