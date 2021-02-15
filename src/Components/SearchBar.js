import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 70px;
`;

const Text = styled.div`
    font-family: "Kanit", sans-serif;
    font-size: 22px;
    margin-bottom: 30px;
    
    @media only screen and (min-width:500px) {
        font-size: 32px;
    }
`;

const Form = styled.form`
    width: 100%;
    max-width: 500px;
    display: flex;
    height: 42px;
`;

const Search = styled.input`
    width: 100%;
    height: 100%;
    outline: 0;
    padding: 0 10px;
    font-size: 20px;
    font-weight: 600;
`;

const SubmitBtn = styled.button`
    border: 0;
    outline: 0;
    background-color: #E50914;
    color: #FFF;
    padding: 0 10px;
`;

export default ({title, handleSubmit, updateTerm}) => (
    <Container>
        <Text>{ title }</Text>
        <Form onSubmit={handleSubmit}>
            <Search onChange={updateTerm} placeholder="Search"/>
            <SubmitBtn type="submit">
                <span className="material-icons">search</span>
            </SubmitBtn>
        </Form>
    </Container>
)