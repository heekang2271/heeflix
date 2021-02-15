import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Container = styled.div`
    //position: absolute;
    padding: 0px 20px;
    padding-top: 100px;
    /* top: 0;
    left: 0; */
    display: flex;
    margin-bottom: 30px;
`;

const Item = styled.div`
    font-family: "Kanit", sans-serif;
    padding: 0 15px;
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 3px solid ${props => props.current ? "rgba(229, 9, 20, 0.7)" : "transparent"};
    transition: 0.3s;
    text-shadow: 2px 2px 3px #000;
`;

const Cover = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-image: url(${props => props.cover});
    background-size: cover;
    background-position: center center;
    /* 지울부분 */
    /* opacity: 0.5;
    filter: blur(3px); */
    animation-name: blur;
    animation-fill-mode: forwards;
    animation-duration: 1s;
    animation-delay: 1s;
    @keyframes blur {
        0% {
            opacity: 1;
        }
        100% {
            filter: blur(3px);
            opacity: 0.5;
        }
    }
    z-index: -1;
`;

export default withRouter(({match: {params: {id}}, history:{location:{pathname}}, cover}) => {
    const isMovie = pathname.includes("/movie/");
    return (
        <Container>
            <Cover className="cover" cover={cover} />
            <Item current={pathname.includes("/detail")}>
                <Link to={ isMovie ? `/movie/${id}/detail` : `/show/${id}/detail` }>DETAIL</Link>
            </Item>
            <Item current={pathname.includes("/video")}>
                <Link to={ isMovie ? `/movie/${id}/video` : `/show/${id}/video` }>VIDEO</Link>
            </Item>
            <Item current={pathname.includes("/product")}>
                <Link to={ isMovie ? `/movie/${id}/product` : `/show/${id}/product` }>PRODUCT</Link>
            </Item>
            {!isMovie && (
                <Item current={pathname.includes("/season")}>
                    <Link to={`/show/${id}/season`}>SEASON</Link>
                </Item>
            )}
        </Container>
    )
})
    