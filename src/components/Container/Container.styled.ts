import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  width: ${({ theme }) => theme.containerWidth.desktop}px;
  padding-left: ${({ theme }) => theme.padding.container}px;
  padding-right: ${({ theme }) => theme.padding.container}px;
  margin-left: auto;
  margin-right: auto;
`;
