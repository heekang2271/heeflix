import React from "react";
import styled from "styled-components";
import Message from "./Message";
import Section from "./Section";
import noPoster from "../img/popcorn.png";
import Company from "./Company";
import PropTypes from "prop-types";

const Container = styled.div`
    margin-top: 50px;
`;

const Country = styled.div`
    margin-bottom: 70px;
    position: relative;
    opacity: 0;
    animation-name: fromLeft;
    animation-fill-mode: forwards;
    animation-duration: 1s;
    animation-delay: 0.5s;
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

const Companies = styled.div`
    position: relative;
    opacity: 0;
    animation-name: fromBottom;
    animation-fill-mode: forwards;
    animation-duration: 1s;
    animation-delay: 1.5s;
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

const Title = styled.h2`
    font-size: 24px;
    margin-bottom: 30px;
    font-family: "Kanit", sans-serif;
`;

const Item = styled.div`
    font-size: 20px;
    font-family: "Kanit", sans-serif;

    &:not(:last-child) {
        margin-bottom: 10px;
    }
`;

const Product = ({ company, country }) => (
    <Container>
        <Country>
            <Title>Production Countries</Title>
            {country && country.length > 0 ? (
                country.map((item, index) => (
                    <Item key={index}>{ `- ${item.name}` }</Item>
                ))
            ) : (
                    <Message text="There is no information." color="#FFF" />
            )}
        </Country>
        <Companies>
            {company && company.length > 0 ? (
                <Section title="Production Companies">
                    {company.map((item) => (
                        <Company
                            key={item.id}
                            logo={item.logo_path ? `https://image.tmdb.org/t/p/original/${item.logo_path}` : noPoster}
                            name={item.name}
                            country={item.original_country}
                        />
                    ))}
                </Section>
            ): (
                    <Country>
                        <Title>Production Companies</Title>
                        <Message text="There is no information." color="#FFF" />
                    </Country>
            )}
        </Companies>
    </Container>
);

Product.propTypes = {
    country: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired
        })
    ),

    company: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            logo_path: PropTypes.string,
            name: PropTypes.string.isRequired,
            original_country: PropTypes.string
        })
    )
}

export default Product;