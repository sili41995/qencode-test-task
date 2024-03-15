import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  margin-left: auto;
  margin-right: auto;

  & > p {
    width: 319px;
    margin-top: ${({ theme }) => theme.spacing(20)};
    color: rgb(26, 25, 25);
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-size: 30px;
    font-weight: 700;
    line-height: 1.3;
    text-align: center;
  }
`;
