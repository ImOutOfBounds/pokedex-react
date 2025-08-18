'use client';

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: space-between;

  background-color: #535353ff;
`;

export const PokePictureContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${props => props.$bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;


export const PokePicture = styled.img`
  height: 40vh;
`;


export const PokeName = styled.div`
  width: 100%;
  height: 40px;
  background-color: black;
  color: #fff;
  text-align: center;
  font-weight: 600;
  font-size: 1.2rem;

  display: flex;            
  align-items: center;       
  justify-content: center;  
`;