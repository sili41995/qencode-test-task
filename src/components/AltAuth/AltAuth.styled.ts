import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(10)};
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const ListItem = styled.li``;

export const Button = styled.button`
  min-width: 192px;
  height: 48px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border: 1.2px solid #d3d8dc;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc};

  &:is(:hover, :focus) {
    box-shadow: ${({ theme }) => theme.shadows.primary};
  }
`;

export const Title = styled.span`
  color: rgb(6, 14, 30);
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.secondary}px;
  font-weight: ${({ theme }) => theme.fontWeight.primary};
  line-height: 1.43;
`;

export const Delimiter = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 30px;
  color: #bec5cc;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.decorative}px;
  font-weight: ${({ theme }) => theme.fontWeight.primary};
  line-height: 1.33;
  text-transform: uppercase;
  text-align: center;

  &::before,
  &::after {
    content: '';
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: #e3e6e9;
  }
`;
