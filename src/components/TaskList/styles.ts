import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  float: left;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 15px;
  background: #fff;
  box-shadow: 3px 1px 12px #0000001a;
  border-radius: 4px;
  margin-bottom: 15px;
  cursor: move;

  .status,
  .days,
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
    align-items: flex-end;
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

export const Heading4 = styled.h4`
  font-family: sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  margin-top: 0px;
  color: #416183;
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
  padding: 30px;
`;

export const DragRow = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const SmallBox = styled.div`
  width: 22%;
  background: #f7f8fa;
  height: max-content;
`;

