import styled from "styled-components";

export const Form = styled.form`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
`;

export const FormLabel = styled.label`
  margin-right: 20px;
`;

export const FormInput = styled.input`
  padding: 10px;
  flex-grow: 6;
`;

export const FormSubmit = styled.input`
  padding: 5px 20px;
  margin: 0;
  border: 0;
  background-color: transparent;
  font-size: inherit;
  color: forestgreen;
  cursor: pointer;
  &:hover {
    color: darkgreen;
  }
`;
