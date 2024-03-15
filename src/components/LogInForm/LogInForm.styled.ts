import styled from '@emotion/styled';

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-top: 30px;

  & > a {
    margin-top: 15px;
    color: ${({ theme }) => theme.colors.primaryColor};
    font-family: Basis Grotesque Pro;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
    letter-spacing: 0%;
    text-align: right;
  }
`;

export const Input = styled.input`
  width: 100%;

  &:not(:last-of-type) {
    margin-bottom: 25px;
  }
`;

export const Button = styled.button`
  width: 100%;
  margin-top: 30px;
`;
