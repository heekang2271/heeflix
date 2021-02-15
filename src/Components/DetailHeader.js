import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Container = styled.div`
    display: flex;
    margin-bottom: 30px;
`;

const Item = styled.div`
    font-family: "Kanit", sans-serif;
    padding: 0 10px;
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 2px solid ${props => props.current ? "rgba(229, 9, 20, 0.7)" : "transparent"};
`;

export default withRouter(({match: {params: {id}}, history:{location:{pathname}}}) => {
    const isMovie = pathname.includes("/movie/");
    console.log(pathname);
    return (
        <Container>
            <Item current={pathname === `/movie/${id}` || pathname === `/show/${id}`}>
                <Link to={ isMovie ? `/movie/${id}` : `/show/${id}` }>DETAIL</Link>
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
    