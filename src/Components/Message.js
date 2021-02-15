import React from "react";
import styled from "styled-components";

const Text = styled.span`
    font-size: 18px;
    font-family: "Kanit", "sans-serif";
    color: ${props => props.color};
`;

export default ({ text, color }) => <Text color={color}>{text}</Text>
