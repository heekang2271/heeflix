import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Image = styled.div`
    background-image: url(${props => props.bgUrl});
    height: 120px;
    background-size: cover;
    background-position: center center;
`;

const Name = styled.div`
    width: 140px;
    font-weight: 500;
    font-family: "Poppins", "Noto Sans KR", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
    padding: 10px;
    line-height: 1.5;
`;

export default ({ logo, name, country }) => (
    <Container>
        <Image bgUrl={logo} />
        <Name>{ name }</Name>
    </Container>
)