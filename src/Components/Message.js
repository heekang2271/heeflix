import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Text = styled.span`
    font-size: 18px;
    font-family: "Kanit", "sans-serif";
    color: ${props => props.color};
`;

const Message = ({ text, color }) => <Text color={color}>{text}</Text>

Message.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}

export default Message;
