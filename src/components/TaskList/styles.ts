import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  float: left;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 15px;
  background: #f8f8f8;
  box-shadow: 3px 1px 12px #0000001a;
  border-radius: 4px;
  margin-bottom: 15px;
  cursor: move;

  .status,
  .time {
    font-size: 14px;
    margin-bottom: 7px;
  }

  .card_right {
    width: auto;
    float: left;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  &.order .status {
    background: #fff1de;
    color: #494949;
    padding: 3px 10px;
    border-radius: 18px;
  }

  &.done .status {
    background: #c8ebdd;
    color: #494949;
    padding: 3px 10px;
    border-radius: 18px;
  }

  &.pending .status {
    background: #cfd8f0;
    color: #494949;
    padding: 3px 10px;
    border-radius: 18px;
  }
`;

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

export const Container = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
`;

export const DragColumn = styled.div`
  width: 100%;
  float: left;
  display: flex;
`;

export const DragRow = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const SmallBox = styled.div`
  width: 22%;
  padding: 0 0.6rem;
  border-radius: 0.5rem;
  background: #f4f4f4;
  height: max-content;
`;
