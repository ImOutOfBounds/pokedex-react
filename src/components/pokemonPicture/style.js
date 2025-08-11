'use client';

import styled from "styled-components";

export const Container = styled.div`
    width: 40vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`;

export const PokePictureContainer = styled.div`
    height: 40vh;
    width: 100%;
    padding 20px;
    background-color: grey;

    display: flex;
    justify-content: center;
    align-items: center; 
`

export const PokePicture = styled.img`
  height: 40vh;
  background-color: grey;
`;


export const PokeName = styled.div`
    height: 40px;
    width: 100%;
    background-color: black;
    color: #fff;
    text-align: center;
`