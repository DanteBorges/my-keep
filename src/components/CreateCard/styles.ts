import styled from "styled-components";


export const HeadCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 2rem;
  margin: 0 0.6rem 0.6rem;
`;
export const Heading4 = styled.h4`
  font-family: "Arial", sans-serif;
  font-size: 16px;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 10px;
  color: #0062ff;
  margin: 0;
`;

export const CreateCardButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 50%;

  transition: background-color 0.3s ease, border-radius 0.3s ease;

  &:hover {
    background-color: #ffffff;
    border-radius: 50%;
  }
`;