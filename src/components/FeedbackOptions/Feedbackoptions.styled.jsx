import styled from '@emotion/styled';

export const OptionsBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 88px;
  height: 32px;
  background-color: #d6eaed;
  border: 1px solid #efefef;
  border-radius: 6px;
  transition: background-color 350ms linear;
  cursor: poiter;

  &:hover {
    background-color: #8bcad1;
  }

  font-weight: 700;
  font-family: 'Roboto', monospace;
`;

export const OptionsList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  justify-content: flex-start;
  background-color: #fff;
  padding: 16px;
  gap: 16px;
`;
