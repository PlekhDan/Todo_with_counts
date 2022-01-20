import styled from "styled-components";

export const TableRow = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  text-align: left;
  border-top: 1px solid grey;
`;

export const TaskTitle = styled.div`
  flex-basis: 50%;
`;

export const TaskStatus = styled.div`
  padding: 5px 10px;
  color: ${props => props.complete ? "green" : "grey"};
  cursor: pointer;
`;

export const Button = styled.div`
  padding: 5px 10px;
  align-self: flex-start;
  color: palevioletred;
  cursor: pointer;
  &:hover {
    color: crimson;
  }
`;
