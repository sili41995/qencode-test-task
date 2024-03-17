import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.p`
  margin-top: ${({ theme }) => theme.spacing(20)};
  color: rgb(26, 25, 25);
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.title}px;
  font-weight: ${({ theme }) => theme.fontWeight.secondary};
  line-height: 1.3;
  text-align: center;
`;
