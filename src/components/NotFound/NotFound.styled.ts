import styled from '@emotion/styled';

export const Container = styled.div``;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.title}px;
  font-weight: ${({ theme }) => theme.fontWeight.secondary};
`;

export const Message = styled.p`
  color: ${({ theme }) => theme.colors.otherFontColor};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.primary}px;
  font-weight: ${({ theme }) => theme.fontWeight.primary};
`;
