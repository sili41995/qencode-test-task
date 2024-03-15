import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing(5)};
`;

export const List = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing(5)};
`;

export const ListItem = styled.li``;
