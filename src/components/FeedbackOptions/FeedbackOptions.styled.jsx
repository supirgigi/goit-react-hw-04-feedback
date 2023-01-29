import styled from '@emotion/styled';

export const OptionsList = styled.ul`
  display: flex;
  gap: 10px;
`;

export const OptionsBtn = styled.button`
  padding: 4px 10px;
  border: 1px solid grey;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;

  :hover,
  :focus {
    background-color: lightblue;
  }
`;
