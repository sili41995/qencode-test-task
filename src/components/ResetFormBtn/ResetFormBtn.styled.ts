import styled from '@emotion/styled';

export const Button = styled.button`
  width: 100%;
  border: none;
  outline: 1.2px solid #d3d8dc;
  border-radius: 8px;
  background-color: transparent;
  padding: 13px;
  color: ${({ theme }) => theme.colors.secondaryFontColor};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.31;
  letter-spacing: -0.024em;
  transition: background-color ${({ theme }) => theme.transitionDurationAndFunc};

  &:is(:hover, :focus) {
    background-color: #d3d8dc;
  }
`;
