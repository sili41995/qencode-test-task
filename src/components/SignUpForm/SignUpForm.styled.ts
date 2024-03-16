import styled from '@emotion/styled';

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-top: 30px;

  & > button {
    margin-top: 30px;
  }

  & > a {
    margin-top: 15px;
    color: ${({ theme }) => theme.colors.primaryColor};
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
    transition: color ${({ theme }) => theme.transitionDurationAndFunc};

    &:is(:hover, :focus) {
      color: ${({ theme }) => theme.colors.accentColor};
    }
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
`;
