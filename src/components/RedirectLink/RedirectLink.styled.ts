import styled from '@emotion/styled';

export const Text = styled.p`
  margin-top: ${({ theme }) => theme.spacing(5)};
  color: ${({ theme }) => theme.colors.secondaryFontColor};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.secondary}px;
  font-weight: ${({ theme }) => theme.fontWeight.other};
  line-height: 1.43;

  & > a {
    color: ${({ theme }) => theme.colors.primaryColor};
    font-weight: ${({ theme }) => theme.fontWeight.primary};
    transition: color ${({ theme }) => theme.transitionDurationAndFunc};

    &:is(:hover, :focus) {
      color: ${({ theme }) => theme.colors.accentColor};
    }
  }
`;
