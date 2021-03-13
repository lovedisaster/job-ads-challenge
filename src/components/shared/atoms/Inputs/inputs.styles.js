import styled from 'styled-components';

export const Input = styled.input`
  height:56px;
  border-radius:6px;
  border:solid 1px ${GS.colors.grayBorder};
  padding: 0 0 0 20px;
  width: 100%;
  font-size: 14px;

  &:invalid{
    box-shadow:none;
  }

  &:focus{
    outline:none;
  }
  border-radius:${GS.styles.borderRadius1};
`;
