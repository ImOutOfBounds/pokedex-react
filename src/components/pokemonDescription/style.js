import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const InfoSection = styled.div`
    width: 40vw;
    align-items: center;
    margin: 20px auto 0 auto;
    background-color: #eee;
    padding: 20px;
    border-radius: 20px 20px 0 0;
    border: 5px solid #939393ff;
`

export const ButtonSection = styled.div`
    width: 40vw;
    height: 25vh;
    margin: 0 auto;
    padding: 20px;
    background-color: #1f1f1fff;
    border: 5px solid #101010ff;
`

export const TypeSection = styled.div `
    display: flex;
    gap: 10px;
`

export const Title = styled.h1`
    font-size: 20px;
`