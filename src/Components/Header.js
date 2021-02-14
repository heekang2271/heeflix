import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 65px;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 10;
    display: flex;
`;

const GnbBox = styled.ul`
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 20px;
`;

const Logo = styled.li`
    font-family: "Kanit", sans-serif;
    font-weight: 500;
    color: #E50914;
    font-size: 30px;
    margin-right: 50px;
`;

const Gnb = styled.li`
    height: 100%;
    padding-top: 10px;
    width: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    color: #FFF;
    font-size: 16px;
    border-bottom: 3px solid ${props => props.current ? "rgba(229, 9, 20, 0.7)" : "transparent"};
    transition: 0.3s;
`;

export default withRouter(({ history: { location: {pathname} } }) => (
    <Header>
        <GnbBox>
            <Logo><Link to="/">HEEFLIX</Link></Logo>
            <Gnb current={pathname === "/movie"}>
                <Link to="/movie">MOVIE</Link>
            </Gnb>
            <Gnb current={pathname === "/tv"}>
                <Link to="/tv">TV</Link>
            </Gnb>
            <Gnb current={pathname === "/search"}>
                <Link to="/search">SEARCH</Link>
            </Gnb>
        </GnbBox>
    </Header>
))
