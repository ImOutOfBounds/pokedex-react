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
  background: #d62f2fff;
  border: none;
  border: 1px solid black;

  padding-bottom: 8%;
  text-align: center;

  &:hover {
    background: #f71414ff;
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
  background: #282828ff;
  border-radius: 20px 20px 0 0;
  border: 1px solid black;
  z-index: 1;
  color: #fff;
  font-size: 30px;

  &:hover {
    background: #050505ff;
    cursor: pointer;
  }
`;
