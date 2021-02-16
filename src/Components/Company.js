import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div``;

const ImageHolder = styled.div`
    background-color: rgba(255, 255, 255, 1);
    padding: 10px;
`;

const Image = styled.div`
    background-image: url(${props => props.bgUrl});
    height: 100px;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
`;

const Name = styled.div`
    width: 140px;
    font-weight: 500;
    font-family: "Poppins", "Noto Sans KR", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
    padding: 10px 3px;
    line-height: 1.5;
    text-shadow: 2px 2px 3px #000;
`;

const Company = ({ logo, name }) => (
    <Container>
        <ImageHolder>
            <Image bgUrl={logo} />
        </ImageHolder>
        <Name>{ name }</Name>
    </Container>
)

Company.propTypes = {
    logo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export default Company;