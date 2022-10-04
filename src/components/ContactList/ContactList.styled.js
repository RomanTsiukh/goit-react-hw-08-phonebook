import styled from 'styled-components';

export const List = styled.ul`
  margin-top: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[0]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const ListItem = styled.li`
  display: flex;
  font-size: ${p => p.theme.space[4]}px;
  justify-content: space-between;
`;
