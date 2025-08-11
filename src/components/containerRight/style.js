import styled from "styled-components";

export const Container = styled.div`
  width: 50vw;
  height: 20vh;
  position: relative;
  background-color: green;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const BtnContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const BigButton = styled.button`
  width: 50%;
  height: 100%;
  background: #ccc;
  border: none;
  border: 1px solid black;

  padding-bottom: 8%;
  text-align: center;

  &:hover {
    background: #999;
    cursor: pointer;
  }
`;



export const MidBtn = styled.button`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 40%;
  height: 50%;
  background: #ff6347;
  border-radius: 20px 20px 0 0;
  border: 1px solid black;
  z-index: 1;

  &:hover {
    background: #999;
    cursor: pointer;
  }
`;
