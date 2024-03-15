import styled from '@emotion/styled';

export const Container = styled.div``;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.titleFontSize}px;
  font-weight: 700;
`;

export const Message = styled.p`
  color: ${({ theme }) => theme.colors.otherFontColor};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.primaryFontSize}px;
  font-weight: 500;
`;
