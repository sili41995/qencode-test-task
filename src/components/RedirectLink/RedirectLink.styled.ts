import styled from '@emotion/styled';

export const Text = styled.p`
  margin-top: ${({ theme }) => theme.spacing(5)};
  color: ${({ theme }) => theme.colors.secondaryFontColor};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;

  & > a {
    color: ${({ theme }) => theme.colors.primaryColor};
    font-weight: 500;
    transition: color ${({ theme }) => theme.transitionDurationAndFunc};

    &:is(:hover, :focus) {
      color: ${({ theme }) => theme.colors.accentColor};
    }
  }
`;
